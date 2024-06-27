import { DEFAULT_RECENT_SLOT_DURATION_MS, KaminoReserve, Reserve, getTokenOracleData } from "@kamino-finance/klend-sdk";
import { AccountInfo, Connection, PublicKey } from "@solana/web3.js";

export const kaminoEntrypoint = async (connection: Connection) => {
    const bankPubkeys: PublicKey[] = []

    const solBankPubkey = new PublicKey("d4A2prbA2whesmvHaL88BH6Ewn5N4bTSU2Ze8P6Bc4Q")
    const usdcBankPubkey = new PublicKey("D6q6wuQSrifJKZYpR1M8R4YawnLDtDsMmWM1NbBmgJ59")
    const bonkBankPubkey = new PublicKey("CoFdsnQeCUyJefhKK6GQaAPT9PEx8Xcs2jejtp9jgn38")
    bankPubkeys.push(solBankPubkey, usdcBankPubkey, bonkBankPubkey)

    const banks: AccountInfo<Buffer>[] = []
    const solBankRaw = await connection.getAccountInfo(solBankPubkey)
    if (!solBankRaw) throw Error("solBankRaw not found")

    const usdcBankRaw = await connection.getAccountInfo(usdcBankPubkey)
    if (!usdcBankRaw) throw Error("usdcBankRaw not found")

    const bonkBankRaw = await connection.getAccountInfo(bonkBankPubkey)
    if (!bonkBankRaw) throw Error("bonkBankRaw not found")
    banks.push(solBankRaw, usdcBankRaw, bonkBankRaw)

    const solBankState = Reserve.decode(solBankRaw.data)
    const usdcBankState = Reserve.decode(usdcBankRaw.data)
    const bonkBankState = Reserve.decode(bonkBankRaw.data)

    const reservesAndOracles = await getTokenOracleData(connection, [solBankState, usdcBankState, bonkBankState]);
    if (!reservesAndOracles) throw Error("reservesAndOracles not found")

    const kaminoMarketReserve: KaminoReserve[] = []
    reservesAndOracles.forEach(([reserve, oracle], index) => {
        if (!oracle) {
            throw Error(`Could not find oracle for ${reserve.config.tokenInfo.name} reserve`);
        }
        const kaminoReserve = KaminoReserve.initialize(
            banks[index],
            bankPubkeys[index],
            reserve,
            oracle,
            connection,
            DEFAULT_RECENT_SLOT_DURATION_MS
        );
        kaminoMarketReserve.push(kaminoReserve)
    });

    const kaminoBankMetadata = {
        SOL: {
            deposit: kaminoMarketReserve[0].totalSupplyAPY().totalAPY,
            borrow: kaminoMarketReserve[0].totalBorrowAPY().totalAPY,
        },
        USDC: {
            deposit: kaminoMarketReserve[1].totalSupplyAPY().totalAPY,
            borrow: kaminoMarketReserve[1].totalBorrowAPY().totalAPY
        },
        BONK: {
            deposit: kaminoMarketReserve[2].totalSupplyAPY().totalAPY,
            borrow: kaminoMarketReserve[2].totalBorrowAPY().totalAPY
        }
    }

    // Log the results
    // for (const [token, data] of Object.entries(kaminoBankMetadata)) {
    //     console.log(`Token symbol :: ${token}`)
    //     console.log(`Address :: ${bankPubkeys[["SOL", "USDC", "BONK"].indexOf(token)].toString()}`)
    //     console.log(`Supply APY ${data.deposit.toFixed(2)}%`)
    //     console.log(`Borrow APY ${data.borrow.toFixed(2)}%`)
    //     console.log("---")
    // }

    return kaminoBankMetadata;
}