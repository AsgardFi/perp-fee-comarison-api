// // SOL/USDC/BONK
// import { Connection, PublicKey } from "@solana/web3.js";
// import { Bank, buildFeedIdMap, MARGINFI_IDL, MarginfiIdlType, MarginfiProgram } from "@mrgnlabs/marginfi-client-v2";
// import { aprToApy, percentFormatter } from "@mrgnlabs/mrgn-common";
// import { AnchorProvider, Program } from "@coral-xyz/anchor";

// export enum LendingModes {
//     LEND = "lend",
//     BORROW = "borrow",
// }

// export const connection = new Connection(Bun.env.SYNC_RPC_ENDPOINT!, "processed");
// export const provider = new AnchorProvider(connection, {} as any, { commitment: 'processed' });
// const marginfiIDL = MARGINFI_IDL as unknown as MarginfiIdlType
// export const marginfiProgram = new Program(MARGINFI_IDL as unknown as MarginfiIdlType, provider) as any as MarginfiProgram;
// export const marginEntrypoint = async (connection: Connection) => {
//     // https://storage.googleapis.com/mrgn-public/mrgn-bank-metadata-cache.json

//     const solBankPubkey = new PublicKey("CCKtUs6Cgwo4aaQUmBPmyoApH2gUDErxNZCAntD6LYGh") // SOL
//     const usdcBankPubkey = new PublicKey("2s37akK2eyBbp8DZgCm7RtsaEz8eJP3Nxd4urLHQv7yB") // USDC
//     const bonkBankPubkey = new PublicKey("DeyH7QxWvnbbaVB4zFrf4hoq7Q8z1ZT14co42BGwGtfM") // Bonk
//     const usdtBankPubkey = new PublicKey("HmpMfL8942u22htC4EMiWgLX931g3sacXFR6KjuLgKLV") // USDT
//     const ethBankPubkey = new PublicKey("BkUyfXjbBBALcfZvw76WAFRvYQ21xxMWWeoPtJrUqG3z") // ETH

//     const solTokenBankRawInfo = await connection.getAccountInfo(solBankPubkey)
//     if (!solTokenBankRawInfo) throw Error("solBankRaw not found")

//     const usdcTokenBankRawInfo = await connection.getAccountInfo(usdcBankPubkey)
//     if (!usdcTokenBankRawInfo) throw Error("usdcBankRaw not found")

//     const bonkTokenBankRaw = await connection.getAccountInfo(bonkBankPubkey)
//     if (!bonkTokenBankRaw) throw Error("bonkBankRaw not found")

//     const usdtTokenBankRaw = await connection.getAccountInfo(usdtBankPubkey)
//     if (!usdtTokenBankRaw) throw Error("usdtBankRaw not found")

//     const ethTokenBankRaw = await connection.getAccountInfo(ethBankPubkey)
//     if (!ethTokenBankRaw) throw Error("ethBankRaw not found")
//         const a = await marginfiProgram.account.bank.fetch(solBankPubkey)

    
//     const solTokenBankRaw = Bank.decodeBankRaw(solTokenBankRawInfo.data, marginfiIDL)
//     const usdcTokenBankRaw = Bank.decodeBankRaw(usdcTokenBankRawInfo.data, marginfiIDL)

//     const feedIdMap = await buildFeedIdMap([solTokenBankRaw.config, usdcTokenBankRaw.config], connection);


//     const solTokenBank = Bank.fromBuffer(solBankPubkey, solTokenBankRawInfo.data, marginfiIDL, feedIdMap)
//     const usdcTokenBank = Bank.fromBuffer(usdcBankPubkey, usdcTokenBankRawInfo.data)
//     const bonkTokenBank = Bank.fromBuffer(bonkBankPubkey, bonkTokenBankRaw.data)
//     const usdtTokenBank = Bank.fromBuffer(usdtBankPubkey, usdtTokenBankRaw.data)
//     const ethTokenBank = Bank.fromBuffer(ethBankPubkey, ethTokenBankRaw.data)

//     const solDepositTokenIRate = computeBankRate(solTokenBank, LendingModes.LEND);
//     const solBorrowTokenIRate = computeBankRate(solTokenBank, LendingModes.BORROW);

//     const usdcDepositTokenIRate = computeBankRate(usdcTokenBank, LendingModes.LEND);
//     const usdcBorrowTokenIRate = computeBankRate(usdcTokenBank, LendingModes.BORROW);

//     const bonkDepositTokenIRate = computeBankRate(bonkTokenBank, LendingModes.LEND);
//     const bonkBorrowTokenIRate = computeBankRate(bonkTokenBank, LendingModes.BORROW);

//     const usdtDepositTokenIRate = computeBankRate(usdtTokenBank, LendingModes.LEND);
//     const usdtBorrowTokenIRate = computeBankRate(usdtTokenBank, LendingModes.BORROW);

//     const ethDepositTokenIRate = computeBankRate(ethTokenBank, LendingModes.LEND);
//     const ethBorrowTokenIRate = computeBankRate(ethTokenBank, LendingModes.BORROW);

//     return {
//         SOL: {
//             deposit: solDepositTokenIRate.apyRate,
//             borrow: solBorrowTokenIRate.apyRate,
//         },
//         USDC: {
//             deposit: usdcDepositTokenIRate.apyRate,
//             borrow: usdcBorrowTokenIRate.apyRate,
//         },
//         BONK: {
//             deposit: bonkDepositTokenIRate.apyRate,
//             borrow: bonkBorrowTokenIRate.apyRate,
//         },
//         USDT: {
//             deposit: usdtDepositTokenIRate.apyRate,
//             borrow: usdtBorrowTokenIRate.apyRate,
//         },
//         ETH: {
//             deposit: ethDepositTokenIRate.apyRate,
//             borrow: ethBorrowTokenIRate.apyRate,
//         }
//     }
// }

// export function computeBankRate(bank: Bank, lendingMode: LendingModes) {
//     const isInLendingMode = lendingMode === LendingModes.LEND;

//     const interestRate = isInLendingMode ? bank.computeInterestRates().lendingRate : bank.computeInterestRates().borrowingRate;

//     const emissionRate = isInLendingMode
//         ? bank.emissionsActiveLending == true
//             ? bank.emissionsRate
//             : 0
//         : bank.emissionsActiveBorrowing == true
//             ? bank.emissionsRate
//             : 0;

//     const aprRate = interestRate.toNumber() + emissionRate;
//     const apyRate = aprToApy(aprRate);
//     const formattedAPR = percentFormatter.format(aprRate);
//     const formattedAPY = percentFormatter.format(apyRate);

//     return { aprRate, apyRate, formattedAPR, formattedAPY }
// }

import { Connection, PublicKey } from "@solana/web3.js";
import { Bank, buildFeedIdMap, MARGINFI_IDL, MarginfiIdlType, MarginfiProgram } from "@mrgnlabs/marginfi-client-v2";
import { aprToApy, percentFormatter } from "@mrgnlabs/mrgn-common";
import { AnchorProvider, Program } from "@coral-xyz/anchor";

export enum LendingModes {
    LEND = "lend",
    BORROW = "borrow",
}

export const connection = new Connection(Bun.env.SYNC_RPC_ENDPOINT!, "processed");
export const provider = new AnchorProvider(connection, {} as any, { commitment: 'processed' });
const marginfiIDL = MARGINFI_IDL as unknown as MarginfiIdlType;
export const marginfiProgram = new Program(MARGINFI_IDL as unknown as MarginfiIdlType, provider) as any as MarginfiProgram;

interface TokenRates {
    deposit: number;
    borrow: number;
}

interface MarginRates {
    SOL: TokenRates;
    USDC: TokenRates;
    BONK: TokenRates;
    USDT: TokenRates;
    ETH: TokenRates;
}

export const marginEntrypoint = async (connection: Connection): Promise<MarginRates> => {
    const bankPubkeys = {
        SOL: new PublicKey("CCKtUs6Cgwo4aaQUmBPmyoApH2gUDErxNZCAntD6LYGh"),
        USDC: new PublicKey("2s37akK2eyBbp8DZgCm7RtsaEz8eJP3Nxd4urLHQv7yB"),
        BONK: new PublicKey("DeyH7QxWvnbbaVB4zFrf4hoq7Q8z1ZT14co42BGwGtfM"),
        USDT: new PublicKey("HmpMfL8942u22htC4EMiWgLX931g3sacXFR6KjuLgKLV"),
        ETH: new PublicKey("BkUyfXjbBBALcfZvw76WAFRvYQ21xxMWWeoPtJrUqG3z"),
    };

    const bankInfos = await Promise.all(
        Object.entries(bankPubkeys).map(async ([token, pubkey]) => {
            const accountInfo = await connection.getAccountInfo(pubkey);
            if (!accountInfo) throw Error(`${token} bank account not found`);
            return { token, pubkey, data: accountInfo.data };
        })
    );

    const feedIdMap = await buildFeedIdMap(
        bankInfos.map(({ data }) => Bank.decodeBankRaw(data, marginfiIDL).config),
        connection
    );

    const banks = bankInfos.map(({ token, pubkey, data }) => 
        Bank.fromBuffer(pubkey, data, marginfiIDL, feedIdMap)
    );

    const rates = banks.reduce((acc, bank, index) => {
        const token = Object.keys(bankPubkeys)[index];
        acc[token as keyof MarginRates] = {
            deposit: computeBankRate(bank, LendingModes.LEND).apyRate,
            borrow: computeBankRate(bank, LendingModes.BORROW).apyRate,
        };
        return acc;
    }, {} as MarginRates);

    return rates;
};

interface BankRate {
    aprRate: number;
    apyRate: number;
    formattedAPR: string;
    formattedAPY: string;
}

export function computeBankRate(bank: Bank, lendingMode: LendingModes): BankRate {
    const isInLendingMode = lendingMode === LendingModes.LEND;

    const interestRate = isInLendingMode ? bank.computeInterestRates().lendingRate : bank.computeInterestRates().borrowingRate;

    const emissionRate = isInLendingMode
        ? bank.emissionsActiveLending ? bank.emissionsRate : 0
        : bank.emissionsActiveBorrowing ? bank.emissionsRate : 0;

    const aprRate = interestRate.toNumber() + emissionRate;
    const apyRate = aprToApy(aprRate);
    const formattedAPR = percentFormatter.format(aprRate);
    const formattedAPY = percentFormatter.format(apyRate);

    return { aprRate, apyRate, formattedAPR, formattedAPY };
}

// // Example usage
// async function main() {
//     try {
//         const rates = await marginEntrypoint(connection);
//         console.log("MarginFi Lending Rates:", JSON.stringify(rates, null, 2));
//     } catch (error) {
//         console.error("Error fetching MarginFi rates:", error);
//     }
// }

// main();