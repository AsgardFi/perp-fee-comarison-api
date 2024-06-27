import { DEFAULT_RECENT_SLOT_DURATION_MS, KaminoReserve, Reserve, getTokenOracleData } from "@kamino-finance/klend-sdk";
import { AccountInfo, Connection, PublicKey } from "@solana/web3.js";

export const kaminoEntrypoint = async (connection: Connection) => {
    const bankPubkeys = {
        SOL: new PublicKey("d4A2prbA2whesmvHaL88BH6Ewn5N4bTSU2Ze8P6Bc4Q"),
        USDC: new PublicKey("D6q6wuQSrifJKZYpR1M8R4YawnLDtDsMmWM1NbBmgJ59"),
        BONK: new PublicKey("CoFdsnQeCUyJefhKK6GQaAPT9PEx8Xcs2jejtp9jgn38"),
        USDT: new PublicKey("H3t6qZ1JkguCNTi9uzVKqQ7dvt2cum4XiXWom6Gn5e5S"),
        ETH: new PublicKey("febGYTnFX4GbSGoFHFeJXUHgNaK53fB23uDins9Jp1E")
    };
    
    const bankPubkeyArray = Object.values(bankPubkeys);
    
    const bankInfos = await Promise.all(
        bankPubkeyArray.map(async (pubkey) => {
            const bankRaw = await connection.getAccountInfo(pubkey);
            if (!bankRaw) throw Error(`Bank info not found for ${pubkey.toString()}`);
            return { pubkey, bankRaw };
        })
    );
    
    const bankStates = bankInfos.map(({ bankRaw }) => Reserve.decode(bankRaw.data));
    
    const reservesAndOracles = await getTokenOracleData(connection, bankStates);
    if (!reservesAndOracles) throw Error("Reserves and oracles data not found");
    
    const kaminoMarketReserves = reservesAndOracles.map(([reserve, oracle], index) => {
        if (!oracle) {
            throw Error(`Could not find oracle for ${reserve.config.tokenInfo.name} reserve`);
        }
        return KaminoReserve.initialize(
            bankInfos[index].bankRaw,
            bankInfos[index].pubkey,
            reserve,
            oracle,
            connection,
            DEFAULT_RECENT_SLOT_DURATION_MS
        );
    });
    
    const kaminoBankMetadata = Object.fromEntries(
        kaminoMarketReserves.map(reserve => [
            reserve.symbol,
            {
                deposit: reserve.totalSupplyAPY().totalAPY,
                borrow: reserve.totalBorrowAPY().totalAPY,
            }
        ])
    );
    
    kaminoMarketReserves.forEach((reserve) => {
        console.log(`Token symbol :: ${reserve.symbol}`);
        console.log(`Address :: ${reserve.address.toString()}`);
        console.log(`Supply APY ${reserve.totalSupplyAPY().totalAPY * 100}%`);
        console.log(`Borrow APY ${reserve.totalBorrowAPY().totalAPY * 100}%`);
        console.log('---');
    });

    return kaminoBankMetadata;
}