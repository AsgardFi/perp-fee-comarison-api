// SOL/USDC
import { Connection, PublicKey } from "@solana/web3.js";

import { Bank } from "@asgardfi/marginfi-client-v2-patch";
import { aprToApy, percentFormatter } from "@mrgnlabs/mrgn-common";


export enum LendingModes {
    LEND = "lend",
    BORROW = "borrow",
}

export const marginEnterypoint = async (connection: Connection) => {
    // https://storage.googleapis.com/mrgn-public/mrgn-bank-metadata-cache.json

    const baseBankPubkey = new PublicKey("CCKtUs6Cgwo4aaQUmBPmyoApH2gUDErxNZCAntD6LYGh") //SOL
    const quoteBankPubkey = new PublicKey("2s37akK2eyBbp8DZgCm7RtsaEz8eJP3Nxd4urLHQv7yB") // USDC

    const baseTokenBankRaw = await connection.getAccountInfo(baseBankPubkey)
    const quoteTokenBankRaw = await connection.getAccountInfo(quoteBankPubkey)


    const baseTokenBank = Bank.fromBuffer(baseBankPubkey, baseTokenBankRaw?.data!)
    const quoteTokenBank = Bank.fromBuffer(quoteBankPubkey, quoteTokenBankRaw?.data!)


    const depositTokenIRate = computeBankRate(
        baseTokenBank,
        LendingModes.LEND
    );
    const borrowTokenIRate = computeBankRate(
        quoteTokenBank,
        LendingModes.BORROW
    );
    const netApy = depositTokenIRate.apyRate - borrowTokenIRate.apyRate;

    return [depositTokenIRate.apyRate, borrowTokenIRate.apyRate, netApy]
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