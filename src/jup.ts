// AVzP2GeRmqGphJsMxWoqjpUifPpCret7LqWhD8NWQK49: TOKEN ACCOUNT OWNER
// BUvduFTd2sWFagCunBPLupG8fBTJqweLw9DuhruNFSCm :: SOL POOL Token Account
// FgpXg2J3TzSs7w3WGYYE7aWePdrxBVLCXSxmAKnCZNtZ :: BTC
// Bgarxg65CEjN3kosjCW5Du3wEqvV3dpCGDR3a2HRQsYJ :: ETH

// 5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq :: JLP POOL

// SOL Custody account :: 7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as jupIDL from './jup_perp_idl.json';
import { nativeToUi } from "@mrgnlabs/mrgn-common";


export const jupEntryPoint = async (connection: Connection) => {

    const solCustodyAccount = new PublicKey('7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz');
    const solCustodyAccountInfo = await connection.getAccountInfo(solCustodyAccount)

    const borshDecoder = new BorshAccountsCoder(jupIDL as any)

    const data = borshDecoder.decode("Custody", solCustodyAccountInfo?.data!);
    
    const currentLTV = nativeToUi(data["assets"]["owned"], 9);
    const currentBorrowed = nativeToUi(data["assets"]["locked"], 9);
    const currentUtilization = ((currentBorrowed/currentLTV) * 100)
    // The borrow rate is calculated as (assets borrowed) / (total assets in pool) * 0.01% per hour * position size.
    const borrowRate = ((currentBorrowed / currentLTV) * 0.01)

    // console.log(`
    //     currentLTV :: ${currentLTV} SOL
    //     currentBorrowed :: ${currentBorrowed} SOL
    //     currentUtilization :: ${currentUtilization} %
    //     borrowRate per hour :: ${borrowRate}% / hr
    // `)

    return [currentLTV, currentBorrowed, currentUtilization, borrowRate]
}