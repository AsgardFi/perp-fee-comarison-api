// 7DWCtB5Z8rPiyBMKUwqyC95R9tJpbhoQhLM9LbK3Z5QZ :: FLash pool
// BjzZ33nMnbXZ7rw3Uy9Uu1W7BDCzzugqkiZoamJHRKF7 :: SOL custody
// HfF7GCcEc76xubFCHLLXRdYcgRzwjEPdfKWqzRS8Ncog :: FLP.1 Custody account

import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as flashIDL from './flp_perp_idl.json';
import { nativeToUi } from "@mrgnlabs/mrgn-common";

export const flashEntryPoint = async (connection: Connection) => {

    const solCustodyAccount = new PublicKey('BjzZ33nMnbXZ7rw3Uy9Uu1W7BDCzzugqkiZoamJHRKF7');
    const solCustodyAccountInfo = await connection.getAccountInfo(solCustodyAccount)

    const borshDecoder = new BorshAccountsCoder(flashIDL as any)

    const data = borshDecoder.decode("Custody", solCustodyAccountInfo?.data!);
    // console.log(`DATA :: ${JSON.stringify(data)}`)
    
    const currentLTV = nativeToUi(data["assets"]["owned"], 9);
    const currentBorrowed = nativeToUi(data["assets"]["locked"], 9);
    const currentUtilization = ((currentBorrowed/currentLTV) * 100)
    // The borrow rate is calculated as (assets borrowed) / (total assets in pool) * 0.01% per hour * position size.
    const borrowRate = ((currentBorrowed / currentLTV) * 0.012)

    return [currentLTV, currentBorrowed, currentUtilization, borrowRate]

}