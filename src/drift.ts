import { BorshAccountsCoder, Idl } from '@coral-xyz/anchor';
import { PerpMarketAccount, PythClient, calculateLongShortFundingRate, initialize } from '@drift-labs/sdk'
import { Connection, PublicKey } from "@solana/web3.js";

import * as driftIDL from './drift_idl.json';

export const driftEntryPoint = async (connection: Connection) => {

    // SOL-PERP
    const SOL_PERP = new PublicKey("8UJgxaiQx5nTrdDgph5FiahMmzduuLTLf5WmsPegYA6W")

    // 1MBONK-PERP
    const BONK_PERP = new PublicKey("2QeqpeJUVo2LBWNELRfcBwJgrNoxJQSd7gokcaM5nvaa")
    
    const borshDecoder = new BorshAccountsCoder(driftIDL as Idl)

    const solPerpRawAccount = await connection.getAccountInfo(SOL_PERP)
    // const bonkPerpRawAccount = await connection.getAccountInfo(BONK_PERP)


    if (!solPerpRawAccount) throw Error("solPerpRawAccount not found")
    // if (!bonkPerpRawAccount) throw Error("bonkPerpRawAccount not found")

    const solPerpMarketAccount = borshDecoder.decode("PerpMarket", solPerpRawAccount.data) as PerpMarketAccount;
    // const bonkPerpMarketAccount = borshDecoder.decode("PerpMarket", bonkPerpRawAccount.data) as PerpMarketAccount;

    const pythClient = new PythClient(connection)

    async function getPerpMarketData(perpMarketAccount: PerpMarketAccount) {
        const oracleKey = perpMarketAccount.amm.oracle
        const rawOracleAccount = await connection.getAccountInfo(oracleKey);
        if (!rawOracleAccount) throw Error("rawOracleAccount not found");

        const oraclePriceData = pythClient.getOraclePriceDataFromBuffer(rawOracleAccount.data)
        const fundingRate = await calculateLongShortFundingRate(perpMarketAccount, oraclePriceData)

        return {
            longFundingRate: fundingRate[0].toNumber() / 1e6,
        }
    }

    const solPerpData = await getPerpMarketData(solPerpMarketAccount)
    // const bonkPerpData = await getPerpMarketData(bonkPerpMarketAccount)

    const driftPerpMetadata = {
        SOLHourlyFundingRate: solPerpData.longFundingRate,
        // BONK: bonkPerpData.longFundingRate
    }

    return driftPerpMetadata

}