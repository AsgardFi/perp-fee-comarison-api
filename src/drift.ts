import { BorshAccountsCoder, Idl } from '@coral-xyz/anchor';
import { PerpMarketAccount, PythClient, calculateLongShortFundingRate, initialize } from '@drift-labs/sdk'
import { Connection, PublicKey } from "@solana/web3.js";

import * as driftIDL from './drift_idl.json';

export const driftEntryPoint = async (connection: Connection) => {

    // SOL-PERP
    const SOL_PERP = new PublicKey("8UJgxaiQx5nTrdDgph5FiahMmzduuLTLf5WmsPegYA6W")

    const borshDecoder = new BorshAccountsCoder(driftIDL as Idl)

    const rawPerpAccount = await connection.getAccountInfo(SOL_PERP)
    const perpMarketAccount = borshDecoder.decode("PerpMarket", rawPerpAccount?.data!) as PerpMarketAccount;


    const orcaleKey = perpMarketAccount.amm.oracle
    console.log("data", perpMarketAccount.amm.oracle.toString())
    console.log("data", JSON.stringify(perpMarketAccount.amm.oracleSource))
    console.log("marketIndex", perpMarketAccount.marketIndex.toString())


    const rawOrcaleAccount = await connection.getAccountInfo(orcaleKey);
    if (!rawOrcaleAccount) throw Error("rawOrcaleAccount not found");

    const pythClient = new PythClient(connection)
    const oraclePriceData = pythClient.getOraclePriceDataFromBuffer(rawOrcaleAccount?.data)

    const fundingRate = await calculateLongShortFundingRate(perpMarketAccount, oraclePriceData)
    const currentEstimatedFundingRate = (fundingRate[0].toNumber() * 24 * 365.25 / 1e6)

    console.log(`fundingRate :: ${JSON.stringify(fundingRate)}`)

    console.log("currentEstimatedFundingRate :: ", fundingRate[0].toNumber() * 24 * 365.25 / 1e6)

    return [currentEstimatedFundingRate]

}