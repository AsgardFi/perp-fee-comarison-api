// AVzP2GeRmqGphJsMxWoqjpUifPpCret7LqWhD8NWQK49: TOKEN ACCOUNT OWNER
// BUvduFTd2sWFagCunBPLupG8fBTJqweLw9DuhruNFSCm :: SOL POOL Token Account
// FgpXg2J3TzSs7w3WGYYE7aWePdrxBVLCXSxmAKnCZNtZ :: BTC
// Bgarxg65CEjN3kosjCW5Du3wEqvV3dpCGDR3a2HRQsYJ :: ETH

// 5BUwFW4nRbftYTDMbgxykoFWqWHPzahFSNAaaaJtVKsq :: JLP POOL

// SOL Custody account :: 7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz
import { BorshAccountsCoder, BorshCoder } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as jupIDL from './jup_perp_idl.json.json';
import { nativeToUi } from "@mrgnlabs/mrgn-common";

const borshDecoder = new BorshAccountsCoder(jupIDL as any);
// const boarsborshDecoder = new BorshCoder(jupIDL as any)

const processAsset = async (connection: Connection, pubkey: string, decimals: number, assetName: string) => {
    const accountInfo = await connection.getAccountInfo(new PublicKey(pubkey));
    if (!accountInfo) throw new Error(`Account info not found for ${pubkey}`);
    
    // const { assets } = boarsborshDecoder.accounts.decode("custody", accountInfo.data);
    const { assets } = borshDecoder.decode("custody", accountInfo.data);
    const ltv = nativeToUi(assets.owned, decimals);
    const borrowed = nativeToUi(assets.locked, decimals);

    const utilization = (borrowed / ltv);
    const borrowRate = (borrowed / ltv) * 0.01;

    console.log(`
    ${assetName}:
    currentLTV :: ${ltv} ${assetName}
    currentBorrowed :: ${borrowed} ${assetName}
    currentUtilization :: ${utilization.toFixed(2)}%
    borrowRate per hour :: ${borrowRate.toFixed(4)}% / hr
    `);

    return { ltv, borrowed, utilization, borrowRate };
};

export const jupEntryPoint = async (connection: Connection) => {
    // const sol = await processAsset(connection, '7xS2gz2bTp3fwCC7knJvUWTEU9Tycczu6VhJYKgi1wdz', 9, 'SOL')
    // const eth = await processAsset(connection, 'AQCGyheWPLeo6Qp9WpYS9m3Qj479t7R636N9ey1rEjEn', 8, 'ETH')

    console.log('Processing complete.');
    // return { sol, eth };
};