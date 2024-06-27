// 7DWCtB5Z8rPiyBMKUwqyC95R9tJpbhoQhLM9LbK3Z5QZ :: FLash pool
// BjzZ33nMnbXZ7rw3Uy9Uu1W7BDCzzugqkiZoamJHRKF7 :: SOL custody
// HfF7GCcEc76xubFCHLLXRdYcgRzwjEPdfKWqzRS8Ncog :: FLP.1 Custody account


import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as flashIDL from './flp_perp_idl.json';
import { nativeToUi } from "@mrgnlabs/mrgn-common";

const borshDecoder = new BorshAccountsCoder(flashIDL as any);

const processAsset = async (connection: Connection, pubkey: string, decimals: number, assetName: string) => {
    const accountInfo = await connection.getAccountInfo(new PublicKey(pubkey));
    if (!accountInfo) throw new Error(`Account info not found for ${pubkey}`);

    const data = borshDecoder.decode("Custody", accountInfo.data);
    const ltv = nativeToUi(data.assets.owned, decimals);
    const borrowed = nativeToUi(data.assets.locked, decimals);
    const utilization = (borrowed / (ltv * 0.9)) * 100;
    const borrowRateMultiplier = assetName === 'BONK' ? 0.02 : 0.012;
    const borrowRate = (borrowed / ltv) * borrowRateMultiplier;

    console.log(`
    ${assetName}:
    currentLTV :: ${ltv} ${assetName}
    currentBorrowed :: ${borrowed} ${assetName}
    currentUtilization :: ${utilization.toFixed(2)}%
    borrowRate per hour :: ${borrowRate.toFixed(4)}% / hr
    `);

    return { ltv, borrowed, utilization, borrowRate };
};

export const flashEntryPoint = async (connection: Connection) => {
    const sol = processAsset(connection, 'BjzZ33nMnbXZ7rw3Uy9Uu1W7BDCzzugqkiZoamJHRKF7', 9, 'SOL')
    const eth = processAsset(connection, '4oX9yQW5oW4MEjphzMuUV9gn5VQvjCL1LwkBqrSLscQ9', 8, 'ETH')
    const bonk = processAsset(connection, '7gfDTeMREaKcg3SMfrgVP7fjrstmrzzAeYCAcVaHTV9h', 5, 'BONK')
    console.log('Processing complete.');
    return { sol, eth, bonk };
};