/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/perpetuals.json`.
 */
export type Perpetuals = {
  "address": "FLASH6Lo6h3iasJKWDs2F8TkW2UKf3s15C8PMGuVfgBn",
  "metadata": {
    "name": "perpetuals",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "init",
      "discriminator": [
        220,
        59,
        207,
        236,
        108,
        250,
        47,
        100
      ],
      "accounts": [
        {
          "name": "upgradeAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        },
        {
          "name": "perpetualsProgram"
        },
        {
          "name": "perpetualsProgramData"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initParams"
            }
          }
        }
      ]
    },
    {
      "name": "addPool",
      "discriminator": [
        115,
        230,
        212,
        211,
        175,
        49,
        39,
        169
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "oracleAuthority"
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "lpTokenMint",
          "writable": true
        },
        {
          "name": "metadataAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "metadataProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addPoolParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "removePool",
      "discriminator": [
        132,
        42,
        53,
        138,
        28,
        220,
        170,
        55
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removePoolParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "addCustody",
      "discriminator": [
        247,
        254,
        126,
        17,
        26,
        6,
        215,
        117
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyTokenAccount",
          "writable": true
        },
        {
          "name": "custodyTokenMint"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addCustodyParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "addCollection",
      "discriminator": [
        79,
        172,
        225,
        142,
        219,
        192,
        171,
        80
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        },
        {
          "name": "collectionMint"
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addCollectionParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "removeCustody",
      "discriminator": [
        143,
        229,
        131,
        48,
        248,
        212,
        167,
        185
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority",
          "writable": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeCustodyParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "addMarket",
      "discriminator": [
        41,
        137,
        185,
        126,
        69,
        139,
        254,
        55
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addMarketParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "removeMarket",
      "discriminator": [
        138,
        35,
        250,
        163,
        200,
        202,
        40,
        110
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority",
          "writable": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeMarketParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setAdminSigners",
      "discriminator": [
        240,
        171,
        141,
        105,
        124,
        2,
        225,
        188
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setAdminSignersParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setCustodyConfig",
      "discriminator": [
        133,
        97,
        130,
        143,
        215,
        229,
        36,
        176
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setCustodyConfigParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setPerpetualsConfig",
      "discriminator": [
        80,
        72,
        21,
        191,
        29,
        121,
        45,
        111
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setPerpetualsConfigParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setPermissions",
      "discriminator": [
        214,
        165,
        105,
        182,
        213,
        162,
        212,
        34
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setPermissionsParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setPoolConfig",
      "discriminator": [
        216,
        87,
        65,
        125,
        113,
        110,
        185,
        120
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "pool",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setPoolConfigParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setMarketConfig",
      "discriminator": [
        128,
        237,
        216,
        59,
        122,
        62,
        156,
        30
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMarketConfigParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setFlpStakeConfig",
      "discriminator": [
        102,
        19,
        223,
        119,
        99,
        21,
        9,
        167
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setFlpStakeConfigParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "withdrawFees",
      "discriminator": [
        198,
        212,
        171,
        109,
        144,
        215,
        174,
        89
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyTokenAccount",
          "writable": true
        },
        {
          "name": "receivingTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "withdrawFeesParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "withdrawSolFees",
      "discriminator": [
        191,
        53,
        166,
        97,
        124,
        212,
        228,
        219
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "receivingAccount",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "withdrawSolFeesParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "updateTokenRatios",
      "discriminator": [
        214,
        110,
        250,
        128,
        137,
        112,
        57,
        219
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateTokenRatiosParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "initStaking",
      "discriminator": [
        42,
        18,
        242,
        224,
        66,
        32,
        122,
        8
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "lpTokenMint"
        },
        {
          "name": "stakedLpTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initStakingParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "setCustomOraclePrice",
      "discriminator": [
        180,
        194,
        182,
        63,
        48,
        125,
        116,
        136
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "custody"
        },
        {
          "name": "oracleAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setCustomOraclePriceParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "testInit",
      "discriminator": [
        48,
        51,
        92,
        122,
        81,
        19,
        112,
        41
      ],
      "accounts": [
        {
          "name": "upgradeAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "transferAuthority",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "testInitParams"
            }
          }
        }
      ]
    },
    {
      "name": "setTestTime",
      "discriminator": [
        242,
        231,
        177,
        251,
        126,
        145,
        159,
        104
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "multisig",
          "writable": true
        },
        {
          "name": "perpetuals",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setTestTimeParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "swap",
      "discriminator": [
        248,
        198,
        158,
        145,
        225,
        117,
        135,
        200
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "fundingAccount",
          "writable": true
        },
        {
          "name": "receivingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "receivingCustody",
          "writable": true
        },
        {
          "name": "receivingCustodyOracleAccount"
        },
        {
          "name": "receivingCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "dispensingCustody",
          "writable": true
        },
        {
          "name": "dispensingCustodyOracleAccount"
        },
        {
          "name": "dispensingCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "swapParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "addLiquidity",
      "discriminator": [
        181,
        157,
        89,
        67,
        143,
        182,
        52,
        72
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "fundingAccount",
          "writable": true
        },
        {
          "name": "lpTokenAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "custodyTokenAccount",
          "writable": true
        },
        {
          "name": "lpTokenMint",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addLiquidityParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "removeLiquidity",
      "discriminator": [
        80,
        85,
        209,
        72,
        24,
        206,
        177,
        108
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "receivingAccount",
          "writable": true
        },
        {
          "name": "lpTokenAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "custodyTokenAccount",
          "writable": true
        },
        {
          "name": "lpTokenMint",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeLiquidityParams"
            }
          }
        }
      ]
    },
    {
      "name": "depositStake",
      "discriminator": [
        160,
        167,
        9,
        220,
        74,
        243,
        228,
        43
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fundingFlpTokenAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        },
        {
          "name": "poolFlpTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "depositStakeParams"
            }
          }
        }
      ]
    },
    {
      "name": "refreshStake",
      "discriminator": [
        194,
        123,
        40,
        247,
        37,
        237,
        119,
        119
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "rewardCustody",
          "writable": true
        },
        {
          "name": "feeDistributionTokenAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "refreshStakeParams"
            }
          }
        }
      ]
    },
    {
      "name": "unstakeInstant",
      "discriminator": [
        119,
        27,
        161,
        139,
        21,
        78,
        130,
        66
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        },
        {
          "name": "rewardCustody",
          "writable": true
        },
        {
          "name": "feeDistributionTokenAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "unstakeInstantParams"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawStake",
      "discriminator": [
        153,
        8,
        22,
        138,
        105,
        176,
        87,
        66
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "receivingFlpTokenAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        },
        {
          "name": "poolFlpTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "withdrawStakeParams"
            }
          }
        }
      ]
    },
    {
      "name": "collectStakeFees",
      "discriminator": [
        61,
        174,
        225,
        165,
        103,
        145,
        250,
        181
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "receivingTokenAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "feeCustody",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        },
        {
          "name": "feeCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "collectStakeRewardParams"
            }
          }
        }
      ]
    },
    {
      "name": "unstakeRequest",
      "discriminator": [
        50,
        86,
        156,
        73,
        149,
        78,
        163,
        134
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "flpStakeAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "unstakeRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "createTradingAccount",
      "discriminator": [
        195,
        4,
        120,
        188,
        147,
        1,
        230,
        128
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "nftMint",
          "writable": true
        },
        {
          "name": "nftTokenAccount"
        },
        {
          "name": "tradingAccount",
          "writable": true
        },
        {
          "name": "metadataAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createTradingAccountParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateTradingAccount",
      "discriminator": [
        230,
        10,
        32,
        132,
        84,
        114,
        14,
        255
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "nftTokenAccount"
        },
        {
          "name": "tradingAccount",
          "writable": true
        },
        {
          "name": "referralAccount",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateTradingAccountParams"
            }
          }
        }
      ]
    },
    {
      "name": "createReferral",
      "discriminator": [
        61,
        17,
        240,
        245,
        172,
        66,
        159,
        232
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tradingAccount"
        },
        {
          "name": "referralAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createReferralParams"
            }
          }
        }
      ]
    },
    {
      "name": "openPosition",
      "discriminator": [
        135,
        128,
        47,
        77,
        15,
        152,
        240,
        49
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fundingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "openPositionParams"
            }
          }
        }
      ]
    },
    {
      "name": "setTriggerPrice",
      "discriminator": [
        138,
        212,
        137,
        74,
        152,
        115,
        174,
        127
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setTriggerPriceParams"
            }
          }
        }
      ]
    },
    {
      "name": "addCollateral",
      "discriminator": [
        127,
        82,
        121,
        42,
        161,
        176,
        249,
        206
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "fundingAccount",
          "writable": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addCollateralParams"
            }
          }
        }
      ]
    },
    {
      "name": "removeCollateral",
      "discriminator": [
        86,
        222,
        130,
        86,
        92,
        20,
        72,
        65
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "receivingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeCollateralParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "increaseSize",
      "discriminator": [
        107,
        13,
        141,
        238,
        152,
        165,
        96,
        87
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "increaseSizeParams"
            }
          }
        }
      ]
    },
    {
      "name": "decreaseSize",
      "discriminator": [
        171,
        28,
        203,
        29,
        118,
        16,
        214,
        169
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "decreaseSizeParams"
            }
          }
        }
      ]
    },
    {
      "name": "closePosition",
      "discriminator": [
        123,
        134,
        81,
        0,
        49,
        68,
        98,
        98
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "receivingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "closePositionParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "forceClosePosition",
      "discriminator": [
        109,
        177,
        151,
        242,
        227,
        130,
        79,
        37
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true
        },
        {
          "name": "receivingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "forceClosePositionParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "levelUp",
      "discriminator": [
        128,
        64,
        197,
        116,
        226,
        129,
        119,
        234
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "metadataAccount",
          "writable": true
        },
        {
          "name": "tradingAccount",
          "writable": true
        },
        {
          "name": "transferAuthority"
        },
        {
          "name": "metadataProgram"
        },
        {
          "name": "nftMint",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "ixSysvar"
        },
        {
          "name": "authorizationRulesProgram"
        },
        {
          "name": "authorizationRulesAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "levelUpParams"
            }
          }
        }
      ]
    },
    {
      "name": "liquidate",
      "discriminator": [
        223,
        179,
        226,
        125,
        48,
        46,
        39,
        74
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "liquidateParams"
            }
          }
        }
      ]
    },
    {
      "name": "getAddLiquidityAmountAndFee",
      "discriminator": [
        172,
        150,
        249,
        181,
        233,
        241,
        78,
        139
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "lpTokenMint"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getAddLiquidityAmountAndFeeParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "amountAndFee"
        }
      }
    },
    {
      "name": "getRemoveLiquidityAmountAndFee",
      "discriminator": [
        194,
        226,
        233,
        102,
        14,
        21,
        196,
        7
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "lpTokenMint"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getRemoveLiquidityAmountAndFeeParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "amountAndFee"
        }
      }
    },
    {
      "name": "getEntryPriceAndFee",
      "discriminator": [
        134,
        30,
        231,
        199,
        83,
        72,
        27,
        99
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getEntryPriceAndFeeParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "newPositionPricesAndFee"
        }
      }
    },
    {
      "name": "getExitPriceAndFee",
      "discriminator": [
        73,
        77,
        94,
        31,
        8,
        9,
        92,
        32
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position"
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getExitPriceAndFeeParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "priceAndFee"
        }
      }
    },
    {
      "name": "getPnl",
      "discriminator": [
        106,
        212,
        3,
        250,
        195,
        224,
        64,
        160
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position"
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getPnlParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "profitAndLoss"
        }
      }
    },
    {
      "name": "getLiquidationState",
      "discriminator": [
        127,
        126,
        199,
        117,
        90,
        89,
        29,
        50
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position"
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "targetOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getLiquidationStateParams"
            }
          }
        }
      ],
      "returns": "u8"
    },
    {
      "name": "getLiquidationPrice",
      "discriminator": [
        73,
        174,
        119,
        65,
        149,
        5,
        73,
        239
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position"
        },
        {
          "name": "market"
        },
        {
          "name": "targetCustody"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getLiquidationPriceParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "oraclePrice"
        }
      }
    },
    {
      "name": "getOraclePrice",
      "discriminator": [
        200,
        20,
        0,
        106,
        56,
        210,
        230,
        140
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getOraclePriceParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "(OraclePrice,OraclePrice)"
        }
      }
    },
    {
      "name": "getSwapAmountAndFees",
      "discriminator": [
        247,
        121,
        40,
        99,
        35,
        82,
        100,
        32
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "receivingCustody"
        },
        {
          "name": "receivingCustodyOracleAccount"
        },
        {
          "name": "dispensingCustody"
        },
        {
          "name": "dispensingCustodyOracleAccount"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getSwapAmountAndFeesParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "swapAmountAndFees"
        }
      }
    },
    {
      "name": "getAssetsUnderManagement",
      "discriminator": [
        44,
        3,
        161,
        69,
        174,
        75,
        137,
        162
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getAssetsUnderManagementParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "(u128,u128)"
        }
      }
    },
    {
      "name": "getLpTokenPrice",
      "discriminator": [
        71,
        172,
        21,
        25,
        176,
        168,
        60,
        10
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "lpTokenMint"
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getLpTokenPriceParams"
            }
          }
        }
      ],
      "returns": "u64"
    }
  ],
  "accounts": [
    {
      "name": "custody",
      "discriminator": [
        1,
        184,
        48,
        81,
        93,
        131,
        63,
        145
      ]
    },
    {
      "name": "flpStake",
      "discriminator": [
        175,
        178,
        171,
        30,
        187,
        253,
        13,
        118
      ]
    },
    {
      "name": "market",
      "discriminator": [
        219,
        190,
        213,
        55,
        0,
        227,
        198,
        154
      ]
    },
    {
      "name": "multisig",
      "discriminator": [
        224,
        116,
        121,
        186,
        68,
        161,
        79,
        236
      ]
    },
    {
      "name": "customOracle",
      "discriminator": [
        227,
        170,
        164,
        218,
        127,
        16,
        35,
        223
      ]
    },
    {
      "name": "perpetuals",
      "discriminator": [
        28,
        167,
        98,
        191,
        104,
        82,
        108,
        196
      ]
    },
    {
      "name": "pool",
      "discriminator": [
        241,
        154,
        109,
        4,
        17,
        177,
        109,
        188
      ]
    },
    {
      "name": "position",
      "discriminator": [
        170,
        188,
        143,
        228,
        122,
        64,
        247,
        208
      ]
    },
    {
      "name": "referral",
      "discriminator": [
        30,
        235,
        136,
        224,
        106,
        107,
        49,
        64
      ]
    },
    {
      "name": "trading",
      "discriminator": [
        81,
        30,
        163,
        174,
        140,
        242,
        239,
        104
      ]
    }
  ],
  "events": [
    {
      "name": "addCollateralLog",
      "discriminator": [
        250,
        80,
        8,
        85,
        212,
        148,
        93,
        189
      ]
    },
    {
      "name": "addLiquidityLog",
      "discriminator": [
        114,
        59,
        143,
        173,
        186,
        139,
        21,
        124
      ]
    },
    {
      "name": "closePositionLog",
      "discriminator": [
        113,
        101,
        11,
        97,
        138,
        46,
        113,
        211
      ]
    },
    {
      "name": "collectStakeRewardLog",
      "discriminator": [
        28,
        123,
        101,
        0,
        157,
        175,
        189,
        235
      ]
    },
    {
      "name": "decreaseSizeLog",
      "discriminator": [
        178,
        148,
        11,
        241,
        33,
        51,
        85,
        153
      ]
    },
    {
      "name": "depositStakeLog",
      "discriminator": [
        167,
        37,
        237,
        7,
        89,
        30,
        232,
        252
      ]
    },
    {
      "name": "forceClosePositionLog",
      "discriminator": [
        25,
        35,
        222,
        82,
        179,
        47,
        124,
        173
      ]
    },
    {
      "name": "increaseSizeLog",
      "discriminator": [
        186,
        190,
        64,
        113,
        120,
        194,
        84,
        179
      ]
    },
    {
      "name": "liquidateLog",
      "discriminator": [
        127,
        98,
        159,
        131,
        170,
        88,
        59,
        80
      ]
    },
    {
      "name": "openPositionLog",
      "discriminator": [
        228,
        131,
        16,
        201,
        132,
        249,
        248,
        151
      ]
    },
    {
      "name": "removeCollateralLog",
      "discriminator": [
        43,
        111,
        136,
        87,
        50,
        25,
        78,
        169
      ]
    },
    {
      "name": "removeLiquidityLog",
      "discriminator": [
        250,
        48,
        139,
        147,
        47,
        0,
        141,
        238
      ]
    },
    {
      "name": "setTriggerPriceLog",
      "discriminator": [
        177,
        74,
        58,
        12,
        12,
        184,
        187,
        102
      ]
    },
    {
      "name": "swapLog",
      "discriminator": [
        200,
        151,
        62,
        49,
        224,
        50,
        16,
        222
      ]
    },
    {
      "name": "unstakeRequestLog",
      "discriminator": [
        160,
        43,
        111,
        217,
        41,
        24,
        11,
        238
      ]
    },
    {
      "name": "withdrawStakeLog",
      "discriminator": [
        67,
        13,
        186,
        221,
        39,
        131,
        140,
        69
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "multisigAccountNotAuthorized",
      "msg": "Account is not authorized to sign this instruction"
    },
    {
      "code": 6001,
      "name": "multisigAlreadySigned",
      "msg": "Account has already signed this instruction"
    },
    {
      "code": 6002,
      "name": "multisigAlreadyExecuted",
      "msg": "This instruction has already been executed"
    },
    {
      "code": 6003,
      "name": "mathOverflow",
      "msg": "Overflow in arithmetic operation"
    },
    {
      "code": 6004,
      "name": "unsupportedOracle",
      "msg": "Unsupported price oracle"
    },
    {
      "code": 6005,
      "name": "invalidOracleAccount",
      "msg": "Invalid oracle account"
    },
    {
      "code": 6006,
      "name": "invalidOracleState",
      "msg": "Invalid oracle state"
    },
    {
      "code": 6007,
      "name": "staleOraclePrice",
      "msg": "Stale oracle price"
    },
    {
      "code": 6008,
      "name": "invalidOraclePrice",
      "msg": "Invalid oracle price"
    },
    {
      "code": 6009,
      "name": "invalidEnvironment",
      "msg": "Instruction is not allowed in production"
    },
    {
      "code": 6010,
      "name": "invalidPoolState",
      "msg": "Invalid pool state"
    },
    {
      "code": 6011,
      "name": "invalidCustodyState",
      "msg": "Invalid custody state"
    },
    {
      "code": 6012,
      "name": "invalidMarketState",
      "msg": "Invalid custody state"
    },
    {
      "code": 6013,
      "name": "invalidCollateralCustody",
      "msg": "Invalid collateral custody"
    },
    {
      "code": 6014,
      "name": "invalidPositionState",
      "msg": "Invalid position state"
    },
    {
      "code": 6015,
      "name": "invalidDispensingCustody",
      "msg": "Invalid Dispensing Custody"
    },
    {
      "code": 6016,
      "name": "invalidPerpetualsConfig",
      "msg": "Invalid perpetuals config"
    },
    {
      "code": 6017,
      "name": "invalidPoolConfig",
      "msg": "Invalid pool config"
    },
    {
      "code": 6018,
      "name": "invalidCustodyConfig",
      "msg": "Invalid custody config"
    },
    {
      "code": 6019,
      "name": "insufficientAmountReturned",
      "msg": "Insufficient token amount returned"
    },
    {
      "code": 6020,
      "name": "maxPriceSlippage",
      "msg": "Price slippage limit exceeded"
    },
    {
      "code": 6021,
      "name": "maxLeverage",
      "msg": "Position leverage limit exceeded"
    },
    {
      "code": 6022,
      "name": "maxInitLeverage",
      "msg": "Position initial leverage limit exceeded"
    },
    {
      "code": 6023,
      "name": "minLeverage",
      "msg": "Position leverage less than minimum"
    },
    {
      "code": 6024,
      "name": "custodyAmountLimit",
      "msg": "Custody amount limit exceeded"
    },
    {
      "code": 6025,
      "name": "positionAmountLimit",
      "msg": "Position amount limit exceeded"
    },
    {
      "code": 6026,
      "name": "tokenRatioOutOfRange",
      "msg": "Token ratio out of range"
    },
    {
      "code": 6027,
      "name": "unsupportedToken",
      "msg": "Token is not supported"
    },
    {
      "code": 6028,
      "name": "unsupportedCustody",
      "msg": "Token is not supported"
    },
    {
      "code": 6029,
      "name": "unsupportedPool",
      "msg": "Token is not supported"
    },
    {
      "code": 6030,
      "name": "unsupportedMarket",
      "msg": "Token is not supported"
    },
    {
      "code": 6031,
      "name": "instructionNotAllowed",
      "msg": "Instruction is not allowed at this time"
    },
    {
      "code": 6032,
      "name": "maxUtilization",
      "msg": "Token utilization limit exceeded"
    },
    {
      "code": 6033,
      "name": "closeOnlyMode",
      "msg": "Close-only mode activated"
    },
    {
      "code": 6034,
      "name": "minCollateral",
      "msg": "Minimum collateral limit breached"
    },
    {
      "code": 6035,
      "name": "permissionlessOracleMissingSignature",
      "msg": "Permissionless oracle update must be preceded by Ed25519 signature verification instruction"
    },
    {
      "code": 6036,
      "name": "permissionlessOracleMalformedEd25519Data",
      "msg": "Ed25519 signature verification data does not match expected format"
    },
    {
      "code": 6037,
      "name": "permissionlessOracleSignerMismatch",
      "msg": "Ed25519 signature was not signed by the oracle authority"
    },
    {
      "code": 6038,
      "name": "permissionlessOracleMessageMismatch",
      "msg": "Signed message does not match instruction params"
    },
    {
      "code": 6039,
      "name": "exponentMismatch",
      "msg": "Exponent Mismatch betweeen operands"
    },
    {
      "code": 6040,
      "name": "closeRatio",
      "msg": "Invalid Close Ratio"
    },
    {
      "code": 6041,
      "name": "insufficientStakeAmount",
      "msg": "Insufficient FLP tokens staked"
    },
    {
      "code": 6042,
      "name": "invalidFeeDeltas",
      "msg": "Invalid Fee Deltas"
    },
    {
      "code": 6043,
      "name": "invalidFeeDistributionCustody",
      "msg": "Invalid Fee Distrivution Custody"
    },
    {
      "code": 6044,
      "name": "invalidCollection",
      "msg": "Invalid Collection"
    },
    {
      "code": 6045,
      "name": "invalidOwner",
      "msg": "Owner of Token Account does not match"
    },
    {
      "code": 6046,
      "name": "invalidAccess",
      "msg": "Only nft holders or referred users can trade"
    },
    {
      "code": 6047,
      "name": "tradingAccountMismatch",
      "msg": "Trading account doesnot match referral account"
    },
    {
      "code": 6048,
      "name": "maxDepostsReached",
      "msg": "Max deposits reached"
    },
    {
      "code": 6049,
      "name": "invalidStopLossPrice",
      "msg": "Invalid Stop Loss price"
    },
    {
      "code": 6050,
      "name": "invalidTakeProfitPrice",
      "msg": "Invalid Take Profit price"
    }
  ],
  "types": [
    {
      "name": "addCollateralParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralDelta",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addCollectionParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "addCustodyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isStable",
            "type": "bool"
          },
          {
            "name": "depegAdjustment",
            "type": "bool"
          },
          {
            "name": "isVirtual",
            "type": "bool"
          },
          {
            "name": "oracle",
            "type": {
              "defined": {
                "name": "oracleParams"
              }
            }
          },
          {
            "name": "pricing",
            "type": {
              "defined": {
                "name": "pricingParams"
              }
            }
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": {
                "name": "fees"
              }
            }
          },
          {
            "name": "borrowRate",
            "type": {
              "defined": {
                "name": "borrowRateParams"
              }
            }
          },
          {
            "name": "ratios",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenRatios"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "addLiquidityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "minLpAmountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "side"
              }
            }
          },
          {
            "name": "correlation",
            "type": "bool"
          },
          {
            "name": "maxPayoffBps",
            "type": "u64"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "marketPermissions"
              }
            }
          }
        ]
      }
    },
    {
      "name": "addPoolParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "maxAumUsd",
            "type": "u128"
          },
          {
            "name": "metadataTitle",
            "type": "string"
          },
          {
            "name": "metadataSymbol",
            "type": "string"
          },
          {
            "name": "metadataUri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "closePositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceWithSlippage",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "privilege",
            "type": {
              "defined": {
                "name": "privilege"
              }
            }
          }
        ]
      }
    },
    {
      "name": "collectStakeRewardParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "createReferralParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "createTradingAccountParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collectionIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "decreaseSizeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceWithSlippage",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "sizeDelta",
            "type": "u64"
          },
          {
            "name": "privilege",
            "type": {
              "defined": {
                "name": "privilege"
              }
            }
          }
        ]
      }
    },
    {
      "name": "depositStakeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "depositAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "forceClosePositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "privilege",
            "type": {
              "defined": {
                "name": "privilege"
              }
            }
          },
          {
            "name": "isStopLoss",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "getAddLiquidityAmountAndFeeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getAssetsUnderManagementParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getEntryPriceAndFeeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateral",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "side"
              }
            }
          }
        ]
      }
    },
    {
      "name": "getExitPriceAndFeeParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getLiquidationPriceParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getLiquidationStateParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getLpTokenPriceParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getOraclePriceParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getPnlParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getRemoveLiquidityAmountAndFeeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmountIn",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getSwapAmountAndFeesParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "useFeePool",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "increaseSizeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceWithSlippage",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "sizeDelta",
            "type": "u64"
          },
          {
            "name": "privilege",
            "type": {
              "defined": {
                "name": "privilege"
              }
            }
          }
        ]
      }
    },
    {
      "name": "initStakingParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "initParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSignatures",
            "type": "u8"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          }
        ]
      }
    },
    {
      "name": "levelUpParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "liquidateParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "openPositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceWithSlippage",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "privilege",
            "type": {
              "defined": {
                "name": "privilege"
              }
            }
          }
        ]
      }
    },
    {
      "name": "refreshStakeParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "removeCollateralParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralDelta",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeCustodyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ratios",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenRatios"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "removeLiquidityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmountIn",
            "type": "u64"
          },
          {
            "name": "minAmountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeMarketParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "removePoolParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "setAdminSignersParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSignatures",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "setCustodyConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "depegAdjustment",
            "type": "bool"
          },
          {
            "name": "customOracleAccount",
            "type": "pubkey"
          },
          {
            "name": "maxDivergenceBps",
            "type": "u64"
          },
          {
            "name": "maxConfBps",
            "type": "u64"
          },
          {
            "name": "maxPriceAgeSec",
            "type": "u64"
          },
          {
            "name": "pricing",
            "type": {
              "defined": {
                "name": "pricingParams"
              }
            }
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": {
                "name": "fees"
              }
            }
          },
          {
            "name": "borrowRate",
            "type": {
              "defined": {
                "name": "borrowRateParams"
              }
            }
          },
          {
            "name": "ratios",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenRatios"
                }
              }
            }
          },
          {
            "name": "rewardThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setCustomOraclePriceParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "expo",
            "type": "i32"
          },
          {
            "name": "conf",
            "type": "u64"
          },
          {
            "name": "ema",
            "type": "u64"
          },
          {
            "name": "publishTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "setFlpStakeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeShareBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setMarketConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxPayoffBps",
            "type": "u64"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "marketPermissions"
              }
            }
          }
        ]
      }
    },
    {
      "name": "setPermissionsParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          }
        ]
      }
    },
    {
      "name": "setPerpetualsConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "allowUngatedTrading",
            "type": "bool"
          },
          {
            "name": "tradingDiscount",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "referralRebate",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "referralDiscount",
            "type": "u64"
          },
          {
            "name": "voltageMultiplier",
            "type": {
              "defined": {
                "name": "voltageMultiplier"
              }
            }
          }
        ]
      }
    },
    {
      "name": "setPoolConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "oracleAuthority",
            "type": "pubkey"
          },
          {
            "name": "maxAumUsd",
            "type": "u128"
          },
          {
            "name": "stakingFeeShareBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setTestTimeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "time",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "setTriggerPriceParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "triggerPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "isStopLoss",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "swapParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "minAmountOut",
            "type": "u64"
          },
          {
            "name": "useFeesPool",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "testInitParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSignatures",
            "type": "u8"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          }
        ]
      }
    },
    {
      "name": "unstakeInstantParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unstakeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "unstakeRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unstakeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateTokenRatiosParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ratios",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenRatios"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "updateTradingAccountParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "withdrawFeesParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "withdrawSolFeesParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawStakeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pendingActivation",
            "type": "bool"
          },
          {
            "name": "deactivated",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mode",
            "type": {
              "defined": {
                "name": "feesMode"
              }
            }
          },
          {
            "name": "swapIn",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "swapOut",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "stableSwapIn",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "stableSwapOut",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "addLiquidity",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "removeLiquidity",
            "type": {
              "defined": {
                "name": "ratioFees"
              }
            }
          },
          {
            "name": "openPosition",
            "type": "u64"
          },
          {
            "name": "closePosition",
            "type": "u64"
          },
          {
            "name": "removeCollateral",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ratioFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minFee",
            "type": "u64"
          },
          {
            "name": "targetFee",
            "type": "u64"
          },
          {
            "name": "maxFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "assets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateral",
            "type": "u64"
          },
          {
            "name": "owned",
            "type": "u64"
          },
          {
            "name": "locked",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "feesStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accrued",
            "type": "u128"
          },
          {
            "name": "distributed",
            "type": "u128"
          },
          {
            "name": "paid",
            "type": "u128"
          },
          {
            "name": "rewardPerLpStaked",
            "type": "u64"
          },
          {
            "name": "protocolFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pricingParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeSpreadLong",
            "type": "u64"
          },
          {
            "name": "tradeSpreadShort",
            "type": "u64"
          },
          {
            "name": "swapSpread",
            "type": "u64"
          },
          {
            "name": "minInitialLeverage",
            "type": "u64"
          },
          {
            "name": "maxInitialLeverage",
            "type": "u64"
          },
          {
            "name": "maxLeverage",
            "type": "u64"
          },
          {
            "name": "minCollateralUsd",
            "type": "u64"
          },
          {
            "name": "delaySeconds",
            "type": "i64"
          },
          {
            "name": "maxUtilization",
            "type": "u64"
          },
          {
            "name": "maxPositionLockedUsd",
            "type": "u64"
          },
          {
            "name": "maxTotalLockedUsd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "borrowRateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseRate",
            "type": "u64"
          },
          {
            "name": "slope1",
            "type": "u64"
          },
          {
            "name": "slope2",
            "type": "u64"
          },
          {
            "name": "optimalUtilization",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "borrowRateState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentRate",
            "type": "u64"
          },
          {
            "name": "cumulativeLockFee",
            "type": "u128"
          },
          {
            "name": "lastUpdate",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "stakeStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pendingActivation",
            "type": "u64"
          },
          {
            "name": "activeAmount",
            "type": "u64"
          },
          {
            "name": "pendingDeactivation",
            "type": "u64"
          },
          {
            "name": "deactivatedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketPermissions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "allowOpenPosition",
            "type": "bool"
          },
          {
            "name": "allowClosePosition",
            "type": "bool"
          },
          {
            "name": "allowCollateralWithdrawal",
            "type": "bool"
          },
          {
            "name": "allowSizeChange",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "positionStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openPositions",
            "type": "u64"
          },
          {
            "name": "updateTime",
            "type": "i64"
          },
          {
            "name": "averageEntryPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "lockedAmount",
            "type": "u64"
          },
          {
            "name": "lockedUsd",
            "type": "u64"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          },
          {
            "name": "unsettledFeeUsd",
            "type": "u64"
          },
          {
            "name": "cumulativeLockFeeSnapshot",
            "type": "u128"
          },
          {
            "name": "sizeDecimals",
            "type": "u8"
          },
          {
            "name": "lockedDecimals",
            "type": "u8"
          },
          {
            "name": "collateralDecimals",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "oraclePrice",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "exponent",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "oracleParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracleAccount",
            "type": "pubkey"
          },
          {
            "name": "customOracleAccount",
            "type": "pubkey"
          },
          {
            "name": "oracleType",
            "type": {
              "defined": {
                "name": "oracleType"
              }
            }
          },
          {
            "name": "maxDivergenceBps",
            "type": "u64"
          },
          {
            "name": "maxConfBps",
            "type": "u64"
          },
          {
            "name": "maxPriceAgeSec",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "backupOracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "expo",
            "type": "i32"
          },
          {
            "name": "conf",
            "type": "i64"
          },
          {
            "name": "emaPrice",
            "type": "i64"
          },
          {
            "name": "publishTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "permissionlessPythCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "backupCache",
            "type": {
              "vec": {
                "defined": {
                  "name": "backupOracle"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "priceAndFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "amountAndFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "newPositionPricesAndFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "entryPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "swapAmountAndFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "feeIn",
            "type": "u64"
          },
          {
            "name": "feeOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "profitAndLoss",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "profit",
            "type": "u64"
          },
          {
            "name": "loss",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "permissions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "allowSwap",
            "type": "bool"
          },
          {
            "name": "allowAddLiquidity",
            "type": "bool"
          },
          {
            "name": "allowRemoveLiquidity",
            "type": "bool"
          },
          {
            "name": "allowOpenPosition",
            "type": "bool"
          },
          {
            "name": "allowClosePosition",
            "type": "bool"
          },
          {
            "name": "allowCollateralWithdrawal",
            "type": "bool"
          },
          {
            "name": "allowSizeChange",
            "type": "bool"
          },
          {
            "name": "allowLiquidation",
            "type": "bool"
          },
          {
            "name": "allowFlpStaking",
            "type": "bool"
          },
          {
            "name": "allowFeeDistribution",
            "type": "bool"
          },
          {
            "name": "allowUngatedTrading",
            "type": "bool"
          },
          {
            "name": "allowFeeDiscounts",
            "type": "bool"
          },
          {
            "name": "allowReferralRebates",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "voltageMultiplier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "volume",
            "type": "u64"
          },
          {
            "name": "rewards",
            "type": "u64"
          },
          {
            "name": "rebates",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenRatios",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "min",
            "type": "u64"
          },
          {
            "name": "max",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "custodyDetails",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeSpreadLong",
            "type": "u64"
          },
          {
            "name": "tradeSpreadShort",
            "type": "u64"
          },
          {
            "name": "delaySeconds",
            "type": "i64"
          },
          {
            "name": "minPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "maxPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          }
        ]
      }
    },
    {
      "name": "voltageStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "volumeUsd",
            "type": "u128"
          },
          {
            "name": "lpRewardsUsd",
            "type": "u128"
          },
          {
            "name": "referralRebateUsd",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "feesMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fixed"
          },
          {
            "name": "linear"
          }
        ]
      }
    },
    {
      "name": "feesAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "addLiquidity"
          },
          {
            "name": "removeLiquidity"
          },
          {
            "name": "swapIn"
          },
          {
            "name": "swapOut"
          },
          {
            "name": "stableSwapIn"
          },
          {
            "name": "stableSwapOut"
          }
        ]
      }
    },
    {
      "name": "side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "long"
          },
          {
            "name": "short"
          }
        ]
      }
    },
    {
      "name": "adminInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "addPool"
          },
          {
            "name": "removePool"
          },
          {
            "name": "addCustody"
          },
          {
            "name": "removeCustody"
          },
          {
            "name": "addMarket"
          },
          {
            "name": "removeMarket"
          },
          {
            "name": "initStaking"
          },
          {
            "name": "setAdminSigners"
          },
          {
            "name": "setCustodyConfig"
          },
          {
            "name": "setPermissions"
          },
          {
            "name": "setBorrowRate"
          },
          {
            "name": "setPerpetualsConfig"
          },
          {
            "name": "setPoolConfig"
          },
          {
            "name": "setFlpStakeConfig"
          },
          {
            "name": "setMarketConfig"
          },
          {
            "name": "addCollection"
          },
          {
            "name": "withdrawFees"
          },
          {
            "name": "withdrawSolFees"
          },
          {
            "name": "setCustomOraclePrice"
          },
          {
            "name": "setTestTime"
          },
          {
            "name": "updateTokenRatios"
          }
        ]
      }
    },
    {
      "name": "oracleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "custom"
          },
          {
            "name": "pyth"
          }
        ]
      }
    },
    {
      "name": "aumCalcMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "includePnl"
          },
          {
            "name": "excludePnl"
          }
        ]
      }
    },
    {
      "name": "privilege",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "nft"
          },
          {
            "name": "referral"
          }
        ]
      }
    },
    {
      "name": "custody",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "tokenAccount",
            "type": "pubkey"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "isStable",
            "type": "bool"
          },
          {
            "name": "depegAdjustment",
            "type": "bool"
          },
          {
            "name": "isVirtual",
            "type": "bool"
          },
          {
            "name": "distributeRewards",
            "type": "bool"
          },
          {
            "name": "oracle",
            "type": {
              "defined": {
                "name": "oracleParams"
              }
            }
          },
          {
            "name": "pricing",
            "type": {
              "defined": {
                "name": "pricingParams"
              }
            }
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": {
                "name": "fees"
              }
            }
          },
          {
            "name": "borrowRate",
            "type": {
              "defined": {
                "name": "borrowRateParams"
              }
            }
          },
          {
            "name": "rewardThreshold",
            "type": "u64"
          },
          {
            "name": "assets",
            "type": {
              "defined": {
                "name": "assets"
              }
            }
          },
          {
            "name": "feesStats",
            "type": {
              "defined": {
                "name": "feesStats"
              }
            }
          },
          {
            "name": "borrowRateState",
            "type": {
              "defined": {
                "name": "borrowRateState"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokenAccountBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "flpStake",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "stakeStats",
            "type": {
              "defined": {
                "name": "stakeStats"
              }
            }
          },
          {
            "name": "rewardSnapshot",
            "type": "u128"
          },
          {
            "name": "unclaimedRewards",
            "type": "u64"
          },
          {
            "name": "feeShareBps",
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "targetCustody",
            "type": "pubkey"
          },
          {
            "name": "collateralCustody",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "side"
              }
            }
          },
          {
            "name": "correlation",
            "type": "bool"
          },
          {
            "name": "maxPayoffBps",
            "type": "u64"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "marketPermissions"
              }
            }
          },
          {
            "name": "openInterest",
            "type": "u64"
          },
          {
            "name": "collectivePosition",
            "type": {
              "defined": {
                "name": "positionStats"
              }
            }
          },
          {
            "name": "targetCustodyId",
            "type": "u64"
          },
          {
            "name": "collateralCustodyId",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "multisig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "numSigners",
            "type": "u8"
          },
          {
            "name": "numSigned",
            "type": "u8"
          },
          {
            "name": "minSignatures",
            "type": "u8"
          },
          {
            "name": "instructionAccountsLen",
            "type": "u8"
          },
          {
            "name": "instructionDataLen",
            "type": "u16"
          },
          {
            "name": "instructionHash",
            "type": "u64"
          },
          {
            "name": "signers",
            "type": {
              "array": [
                "pubkey",
                6
              ]
            }
          },
          {
            "name": "signed",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "customOracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "expo",
            "type": "i32"
          },
          {
            "name": "conf",
            "type": "u64"
          },
          {
            "name": "ema",
            "type": "u64"
          },
          {
            "name": "publishTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "perpetuals",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "pools",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "collections",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "voltageMultiplier",
            "type": {
              "defined": {
                "name": "voltageMultiplier"
              }
            }
          },
          {
            "name": "tradingDiscount",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "referralRebate",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "referralDiscount",
            "type": "u64"
          },
          {
            "name": "inceptionTime",
            "type": "i64"
          },
          {
            "name": "transferAuthorityBump",
            "type": "u8"
          },
          {
            "name": "perpetualsBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "permissions"
              }
            }
          },
          {
            "name": "inceptionTime",
            "type": "i64"
          },
          {
            "name": "flpMint",
            "type": "pubkey"
          },
          {
            "name": "oracleAuthority",
            "type": "pubkey"
          },
          {
            "name": "flpTokenAccount",
            "type": "pubkey"
          },
          {
            "name": "rewardCustody",
            "type": "pubkey"
          },
          {
            "name": "custodies",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "ratios",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenRatios"
                }
              }
            }
          },
          {
            "name": "markets",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "maxAumUsd",
            "type": "u128"
          },
          {
            "name": "aumUsd",
            "type": "u128"
          },
          {
            "name": "totalStaked",
            "type": {
              "defined": {
                "name": "stakeStats"
              }
            }
          },
          {
            "name": "stakingFeeShareBps",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "flpMintBump",
            "type": "u8"
          },
          {
            "name": "flpTokenAccountBump",
            "type": "u8"
          },
          {
            "name": "vpVolumeFactor",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "updateTime",
            "type": "i64"
          },
          {
            "name": "entryPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "lockedAmount",
            "type": "u64"
          },
          {
            "name": "lockedUsd",
            "type": "u64"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          },
          {
            "name": "unsettledAmount",
            "type": "u64"
          },
          {
            "name": "unsettledFeesUsd",
            "type": "u64"
          },
          {
            "name": "cumulativeLockFeeSnapshot",
            "type": "u128"
          },
          {
            "name": "takeProfitPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "stopLossPrice",
            "type": {
              "defined": {
                "name": "oraclePrice"
              }
            }
          },
          {
            "name": "sizeDecimals",
            "type": "u8"
          },
          {
            "name": "lockedDecimals",
            "type": "u8"
          },
          {
            "name": "collateralDecimals",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "referral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "refererTradingAccount",
            "type": "pubkey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "trading",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "voltagePoints",
            "type": "u64"
          },
          {
            "name": "stats",
            "type": {
              "defined": {
                "name": "voltageStats"
              }
            }
          },
          {
            "name": "snapshot",
            "type": {
              "defined": {
                "name": "voltageStats"
              }
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "addCollateralLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "collateralPriceUsd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addLiquidityLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolName",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "custodyId",
            "type": "u64"
          },
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "lpAmountOut",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closePositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "profitUsd",
            "type": "u64"
          },
          {
            "name": "lossUsd",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "collectStakeRewardLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "feeCollected",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "decreaseSizeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeDelta",
            "type": "u64"
          },
          {
            "name": "sizeDeltaUsd",
            "type": "u64"
          },
          {
            "name": "settledReturns",
            "type": "u64"
          },
          {
            "name": "deltaProfitUsd",
            "type": "u64"
          },
          {
            "name": "deltaLossUsd",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositStakeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "forceClosePositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "profitUsd",
            "type": "u64"
          },
          {
            "name": "lossUsd",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          },
          {
            "name": "isStopLoss",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "increaseSizeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidateLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "openPositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "sizeAmount",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeCollateralLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "collateralPriceUsd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolName",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "custodyId",
            "type": "u64"
          },
          {
            "name": "lpAmountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setTriggerPriceLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "priceUsd",
            "type": "u64"
          },
          {
            "name": "isStopLoss",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "swapLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolName",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "custodyIdIn",
            "type": "u64"
          },
          {
            "name": "custodyIdOut",
            "type": "u64"
          },
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "feeInAmount",
            "type": "u64"
          },
          {
            "name": "feeOutAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "unstakeRequestLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawStakeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpTokens",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
