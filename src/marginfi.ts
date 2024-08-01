// SOL/USDC/BONK
import { Connection, PublicKey } from "@solana/web3.js";
import { Bank, BankConfigRaw, findPythPushOracleAddress, MARGINFI_IDL, MARGINFI_SPONSORED_SHARD_ID, MarginfiIdlType, MarginfiProgram, OracleSetup, parseOracleSetup, PYTH_PUSH_ORACLE_ID, PYTH_SPONSORED_SHARD_ID } from "@mrgnlabs/marginfi-client-v2";
import { aprToApy, percentFormatter } from "@mrgnlabs/mrgn-common";
import { AnchorProvider, Program } from "@coral-xyz/anchor";

export enum LendingModes {
    LEND = "lend",
    BORROW = "borrow",
}

export const connection = new Connection(Bun.env.SYNC_RPC_ENDPOINT!, "processed");
export const provider = new AnchorProvider(connection, {} as any, { commitment: 'processed' });
const marginfiIDL = MARGINFI_IDL as unknown as MarginfiIdlType
export const marginfiProgram = new Program(MARGINFI_IDL as unknown as MarginfiIdlType, provider) as any as MarginfiProgram;
export const marginEntrypoint = async (connection: Connection) => {
    // https://storage.googleapis.com/mrgn-public/mrgn-bank-metadata-cache.json

    const solBankPubkey = new PublicKey("CCKtUs6Cgwo4aaQUmBPmyoApH2gUDErxNZCAntD6LYGh") // SOL
    const usdcBankPubkey = new PublicKey("2s37akK2eyBbp8DZgCm7RtsaEz8eJP3Nxd4urLHQv7yB") // USDC
    const bonkBankPubkey = new PublicKey("DeyH7QxWvnbbaVB4zFrf4hoq7Q8z1ZT14co42BGwGtfM") // Bonk
    const usdtBankPubkey = new PublicKey("HmpMfL8942u22htC4EMiWgLX931g3sacXFR6KjuLgKLV") // USDT
    const ethBankPubkey = new PublicKey("BkUyfXjbBBALcfZvw76WAFRvYQ21xxMWWeoPtJrUqG3z") // ETH

    const solTokenBankRawInfo = await connection.getAccountInfo(solBankPubkey)
    if (!solTokenBankRawInfo) throw Error("solBankRaw not found")

    const usdcTokenBankRawInfo = await connection.getAccountInfo(usdcBankPubkey)
    if (!usdcTokenBankRawInfo) throw Error("usdcBankRaw not found")

    const bonkTokenBankRawInfo = await connection.getAccountInfo(bonkBankPubkey)
    if (!bonkTokenBankRawInfo) throw Error("bonkBankRaw not found")

    const usdtTokenBankRawInfo = await connection.getAccountInfo(usdtBankPubkey)
    if (!usdtTokenBankRawInfo) throw Error("usdtBankRaw not found")

    const ethTokenBankRawInfo = await connection.getAccountInfo(ethBankPubkey)
    if (!ethTokenBankRawInfo) throw Error("ethBankRaw not found")

    const [solTokenBankRaw, usdcTokenBankRaw, bonkTokenBankRaw, usdtTokenBankRaw, ethTokenBankRaw] = await
        marginfiProgram.account.bank.fetchMultiple([
            solBankPubkey, usdcBankPubkey, bonkBankPubkey, usdtBankPubkey, ethBankPubkey
        ])

    if (!solTokenBankRaw) throw Error("solTokenBankRaw not found")
    if (!usdcTokenBankRaw) throw Error("solTokenBankRaw not found")
    if (!bonkTokenBankRaw) throw Error("solTokenBankRaw not found")
    if (!usdtTokenBankRaw) throw Error("solTokenBankRaw not found")
    if (!ethTokenBankRaw) throw Error("solTokenBankRaw not found")

    const feedIdMap = await buildFeedIdMap([
        solTokenBankRaw.config,
        usdcTokenBankRaw.config,
        bonkTokenBankRaw.config,
        usdtTokenBankRaw.config,
        ethTokenBankRaw.config
    ], connection);

    const solTokenBank = Bank.fromAccountParsed(solBankPubkey, solTokenBankRaw, feedIdMap);
    const usdcTokenBank = Bank.fromAccountParsed(usdcBankPubkey, usdcTokenBankRaw, feedIdMap);
    const bonkTokenBank = Bank.fromAccountParsed(bonkBankPubkey, bonkTokenBankRaw, feedIdMap);
    const usdtTokenBank = Bank.fromAccountParsed(usdtBankPubkey, usdtTokenBankRaw, feedIdMap);
    const ethTokenBank = Bank.fromAccountParsed(ethBankPubkey, ethTokenBankRaw, feedIdMap);

    const solDepositTokenIRate = computeBankRate(solTokenBank, LendingModes.LEND);
    const solBorrowTokenIRate = computeBankRate(solTokenBank, LendingModes.BORROW);

    const usdcDepositTokenIRate = computeBankRate(usdcTokenBank, LendingModes.LEND);
    const usdcBorrowTokenIRate = computeBankRate(usdcTokenBank, LendingModes.BORROW);

    const bonkDepositTokenIRate = computeBankRate(bonkTokenBank, LendingModes.LEND);
    const bonkBorrowTokenIRate = computeBankRate(bonkTokenBank, LendingModes.BORROW);

    const usdtDepositTokenIRate = computeBankRate(usdtTokenBank, LendingModes.LEND);
    const usdtBorrowTokenIRate = computeBankRate(usdtTokenBank, LendingModes.BORROW);

    const ethDepositTokenIRate = computeBankRate(ethTokenBank, LendingModes.LEND);
    const ethBorrowTokenIRate = computeBankRate(ethTokenBank, LendingModes.BORROW);

    return {
        SOL: {
            deposit: solDepositTokenIRate.apyRate,
            borrow: solBorrowTokenIRate.apyRate,
        },
        USDC: {
            deposit: usdcDepositTokenIRate.apyRate,
            borrow: usdcBorrowTokenIRate.apyRate,
        },
        BONK: {
            deposit: bonkDepositTokenIRate.apyRate,
            borrow: bonkBorrowTokenIRate.apyRate,
        },
        USDT: {
            deposit: usdtDepositTokenIRate.apyRate,
            borrow: usdtBorrowTokenIRate.apyRate,
        },
        ETH: {
            deposit: ethDepositTokenIRate.apyRate,
            borrow: ethBorrowTokenIRate.apyRate,
        }
    }
}

export function computeBankRate(bank: Bank, lendingMode: LendingModes) {
    const isInLendingMode = lendingMode === LendingModes.LEND;

    const interestRate = isInLendingMode ? bank.computeInterestRates().lendingRate : bank.computeInterestRates().borrowingRate;

    const emissionRate = isInLendingMode
        ? bank.emissionsActiveLending == true
            ? bank.emissionsRate
            : 0
        : bank.emissionsActiveBorrowing == true
            ? bank.emissionsRate
            : 0;

    const aprRate = interestRate.toNumber() + emissionRate;
    const apyRate = aprToApy(aprRate);
    const formattedAPR = percentFormatter.format(aprRate);
    const formattedAPY = percentFormatter.format(apyRate);

    return { aprRate, apyRate, formattedAPR, formattedAPY }
}

export type PythPushFeedIdMap = Map<string, PublicKey>;

export async function buildFeedIdMap(bankConfigs: BankConfigRaw[], connection: Connection): Promise<PythPushFeedIdMap> {
    const feedIdMap: PythPushFeedIdMap = new Map<string, PublicKey>();

    const feedIdsWithAddresses = bankConfigs.filter((bankConfig) => parseOracleSetup(bankConfig.oracleSetup) == OracleSetup.PythPushOracle).map((bankConfig) => {
        let feedId = bankConfig.oracleKeys[0].toBuffer();
        return {
            feedId, addresses: [
                findPythPushOracleAddress(feedId, PYTH_PUSH_ORACLE_ID, PYTH_SPONSORED_SHARD_ID),
                findPythPushOracleAddress(feedId, PYTH_PUSH_ORACLE_ID, MARGINFI_SPONSORED_SHARD_ID),
            ]
        }
    }).flat();

    const addressess = feedIdsWithAddresses.map((feedIdWithAddress) => feedIdWithAddress.addresses).flat();
    const accountInfos = [];

    const chunkSize = 25;
    for (let i = 0; i < addressess.length; i += chunkSize) {
        const chunk = addressess.slice(i, i + chunkSize);
        const accountInfosChunk = await connection.getMultipleAccountsInfo(chunk);
        accountInfos.push(...accountInfosChunk);
    }

    for (let i = 0; i < feedIdsWithAddresses.length; i++) {
        const oraclesStartIndex = i * 2;

        const pythSponsoredOracle = accountInfos[oraclesStartIndex];
        const mfiSponsoredOracle = accountInfos[oraclesStartIndex + 1];

        const feedId = feedIdsWithAddresses[i].feedId.toString('hex');

        if (mfiSponsoredOracle) {
            feedIdMap.set(feedId, feedIdsWithAddresses[i].addresses[1]);
        } else if (pythSponsoredOracle) {
            feedIdMap.set(feedId, feedIdsWithAddresses[i].addresses[0]);
        } else {
            throw new Error(`No oracle found for feedId: ${feedId}, either Pyth or MFI sponsored oracle must exist`);
        }
    }

    return feedIdMap;
}