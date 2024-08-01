/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/perpetuals.json`.
 */
export type Perpetuals = {
  "address": "PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu",
  "metadata": {
    "name": "perpetuals",
    "version": "0.1.3",
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
          "name": "admin"
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
              "name": "addPoolParams"
            }
          }
        }
      ]
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
      ]
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
          "writable": true,
          "signer": true
        },
        {
          "name": "perpetuals"
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
      ]
    },
    {
      "name": "setCustodyGlobalLimit",
      "discriminator": [
        94,
        82,
        154,
        177,
        193,
        205,
        141,
        76
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
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
              "name": "setCustodyGlobalLimitParams"
            }
          }
        }
      ]
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
          "signer": true
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
              "name": "setPoolConfigParams"
            }
          }
        }
      ]
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
          "signer": true
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
      ]
    },
    {
      "name": "transferAdmin",
      "discriminator": [
        42,
        242,
        66,
        106,
        228,
        10,
        111,
        156
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "newAdmin"
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
              "name": "transferAdminParams"
            }
          }
        }
      ]
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
          "name": "keeper",
          "signer": true
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
          "name": "custodyOracleAccount"
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
      ]
    },
    {
      "name": "withdrawFees2",
      "discriminator": [
        252,
        128,
        143,
        145,
        225,
        221,
        159,
        207
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
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
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
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
              "name": "withdrawFees2Params"
            }
          }
        }
      ]
    },
    {
      "name": "createTokenMetadata",
      "discriminator": [
        221,
        80,
        176,
        37,
        153,
        188,
        160,
        68
      ],
      "accounts": [
        {
          "name": "admin",
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
          "name": "transferAuthority"
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "lpTokenMint"
        },
        {
          "name": "tokenMetadataProgram"
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
              "name": "createTokenMetadataParams"
            }
          }
        }
      ]
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
          "name": "admin"
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
      "name": "setTestOraclePrice",
      "discriminator": [
        44,
        111,
        165,
        185,
        58,
        14,
        249,
        249
      ],
      "accounts": [
        {
          "name": "admin",
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
              "name": "setTestOraclePriceParams"
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
      ]
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
          "name": "pool",
          "writable": true
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
      ]
    },
    {
      "name": "swap2",
      "discriminator": [
        65,
        75,
        63,
        76,
        235,
        91,
        91,
        136
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
          "name": "pool",
          "writable": true
        },
        {
          "name": "receivingCustody",
          "writable": true
        },
        {
          "name": "receivingCustodyDovesPriceAccount"
        },
        {
          "name": "receivingCustodyPythnetPriceAccount"
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
          "name": "dispensingCustodyDovesPriceAccount"
        },
        {
          "name": "dispensingCustodyPythnetPriceAccount"
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "swap2Params"
            }
          }
        }
      ]
    },
    {
      "name": "swapExactOut",
      "discriminator": [
        250,
        73,
        101,
        33,
        38,
        207,
        75,
        184
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
          "name": "pool",
          "writable": true
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "swapExactOutParams"
            }
          }
        }
      ]
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
      ]
    },
    {
      "name": "addLiquidity2",
      "discriminator": [
        228,
        162,
        78,
        28,
        70,
        219,
        116,
        115
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
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addLiquidity2Params"
            }
          }
        }
      ]
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
      "name": "removeLiquidity2",
      "discriminator": [
        230,
        215,
        82,
        127,
        241,
        101,
        227,
        146
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
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeLiquidity2Params"
            }
          }
        }
      ]
    },
    {
      "name": "createIncreasePositionRequest",
      "discriminator": [
        8,
        160,
        201,
        226,
        217,
        74,
        228,
        137
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "inputMint"
        },
        {
          "name": "referral",
          "optional": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createIncreasePositionRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "createIncreasePositionMarketRequest",
      "discriminator": [
        184,
        85,
        199,
        24,
        105,
        171,
        156,
        56
      ],
      "accounts": [
        {
          "name": "owner",
          "writable": true,
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "inputMint"
        },
        {
          "name": "referral",
          "optional": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createIncreasePositionMarketRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateIncreasePositionRequest",
      "discriminator": [
        100,
        110,
        83,
        102,
        86,
        7,
        105,
        157
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
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateIncreasePositionRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "createDecreasePositionRequest",
      "discriminator": [
        146,
        21,
        51,
        121,
        187,
        208,
        7,
        69
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
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "desiredMint"
        },
        {
          "name": "referral",
          "optional": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createDecreasePositionRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "createDecreasePositionRequest2",
      "discriminator": [
        105,
        64,
        201,
        82,
        250,
        14,
        109,
        77
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
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "desiredMint"
        },
        {
          "name": "referral",
          "optional": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createDecreasePositionRequest2Params"
            }
          }
        }
      ]
    },
    {
      "name": "createDecreasePositionMarketRequest",
      "discriminator": [
        74,
        198,
        195,
        86,
        193,
        99,
        1,
        79
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
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "desiredMint"
        },
        {
          "name": "referral",
          "optional": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createDecreasePositionMarketRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateDecreasePositionRequest",
      "discriminator": [
        69,
        44,
        72,
        173,
        62,
        20,
        177,
        146
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
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateDecreasePositionRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "updateDecreasePositionRequest2",
      "discriminator": [
        144,
        200,
        249,
        255,
        108,
        217,
        249,
        116
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
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateDecreasePositionRequest2Params"
            }
          }
        }
      ]
    },
    {
      "name": "closePositionRequest",
      "discriminator": [
        40,
        105,
        217,
        188,
        220,
        45,
        109,
        110
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true,
          "optional": true
        },
        {
          "name": "owner",
          "writable": true
        },
        {
          "name": "ownerAta",
          "writable": true,
          "optional": true
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "closePositionRequestParams"
            }
          }
        }
      ]
    },
    {
      "name": "increasePosition2",
      "discriminator": [
        215,
        101,
        62,
        100,
        152,
        11,
        154,
        61
      ],
      "accounts": [
        {
          "name": "keeper",
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position",
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
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "increasePosition2Params"
            }
          }
        }
      ]
    },
    {
      "name": "increasePosition4",
      "discriminator": [
        67,
        147,
        53,
        23,
        43,
        57,
        16,
        67
      ],
      "accounts": [
        {
          "name": "keeper",
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyDovesPriceAccount"
        },
        {
          "name": "collateralCustodyPythnetPriceAccount"
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "increasePosition4Params"
            }
          }
        }
      ]
    },
    {
      "name": "increasePositionPreSwap",
      "discriminator": [
        26,
        136,
        225,
        217,
        22,
        21,
        83,
        20
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
        {
          "name": "keeperAta",
          "writable": true
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralCustodyTokenAccount"
        },
        {
          "name": "instruction"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "increasePositionPreSwapParams"
            }
          }
        }
      ]
    },
    {
      "name": "decreasePosition2",
      "discriminator": [
        180,
        193,
        163,
        222,
        169,
        231,
        66,
        253
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
        {
          "name": "keeperAta",
          "writable": true,
          "optional": true
        },
        {
          "name": "owner",
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position",
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
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "instruction"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "decreasePosition2Params"
            }
          }
        }
      ]
    },
    {
      "name": "decreasePositionPostSwap",
      "discriminator": [
        75,
        246,
        208,
        7,
        203,
        66,
        106,
        91
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
        {
          "name": "positionRequest"
        },
        {
          "name": "positionRequestAta"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "decreasePositionPostSwapParams"
            }
          }
        }
      ]
    },
    {
      "name": "decreasePosition3",
      "discriminator": [
        145,
        243,
        130,
        119,
        196,
        220,
        95,
        118
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
        {
          "name": "owner",
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position",
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
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "decreasePosition3Params"
            }
          }
        }
      ]
    },
    {
      "name": "decreasePosition4",
      "discriminator": [
        185,
        161,
        114,
        175,
        96,
        148,
        3,
        170
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
        {
          "name": "owner",
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
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyDovesPriceAccount"
        },
        {
          "name": "collateralCustodyPythnetPriceAccount"
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "decreasePosition4Params"
            }
          }
        }
      ]
    },
    {
      "name": "liquidateFullPosition2",
      "discriminator": [
        233,
        160,
        187,
        98,
        2,
        234,
        48,
        249
      ],
      "accounts": [
        {
          "name": "signer",
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
          "name": "position",
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
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "liquidateFullPosition2Params"
            }
          }
        }
      ]
    },
    {
      "name": "liquidateFullPosition4",
      "discriminator": [
        64,
        176,
        88,
        51,
        168,
        188,
        156,
        175
      ],
      "accounts": [
        {
          "name": "signer",
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
          "name": "position",
          "writable": true
        },
        {
          "name": "custody",
          "writable": true
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustody",
          "writable": true
        },
        {
          "name": "collateralCustodyDovesPriceAccount"
        },
        {
          "name": "collateralCustodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustodyTokenAccount",
          "writable": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "liquidateFullPosition4Params"
            }
          }
        }
      ]
    },
    {
      "name": "refreshAssetsUnderManagement",
      "discriminator": [
        162,
        0,
        215,
        55,
        225,
        15,
        185,
        0
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
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
              "name": "refreshAssetsUnderManagementParams"
            }
          }
        }
      ]
    },
    {
      "name": "instantCreateTpsl",
      "discriminator": [
        117,
        98,
        66,
        127,
        30,
        50,
        73,
        185
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
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
          "name": "perpetuals"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "positionRequestAta",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "desiredMint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "instantCreateTpslParams"
            }
          }
        }
      ]
    },
    {
      "name": "instantUpdateTpsl",
      "discriminator": [
        144,
        228,
        114,
        37,
        165,
        242,
        111,
        101
      ],
      "accounts": [
        {
          "name": "keeper",
          "signer": true
        },
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
          "name": "position"
        },
        {
          "name": "positionRequest",
          "writable": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "instantUpdateTpslParams"
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
      "name": "getAddLiquidityAmountAndFee2",
      "discriminator": [
        109,
        157,
        55,
        169,
        8,
        81,
        4,
        118
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
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "lpTokenMint"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getAddLiquidityAmountAndFee2Params"
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
      "name": "getRemoveLiquidityAmountAndFee2",
      "discriminator": [
        183,
        59,
        72,
        110,
        223,
        243,
        150,
        142
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
          "name": "custodyDovesPriceAccount"
        },
        {
          "name": "custodyPythnetPriceAccount"
        },
        {
          "name": "lpTokenMint"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getRemoveLiquidityAmountAndFee2Params"
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
      "name": "getIncreasePosition",
      "discriminator": [
        101,
        131,
        0,
        32,
        246,
        54,
        251,
        101
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "optional": true
        },
        {
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getIncreasePositionParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "increasePositionInfo"
        }
      }
    },
    {
      "name": "getDecreasePosition",
      "discriminator": [
        106,
        31,
        146,
        195,
        103,
        108,
        48,
        250
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
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "collateralCustodyOracleAccount"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        },
        {
          "name": "collateralCustodyPriceUpdate",
          "optional": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getDecreasePositionParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "decreasePositionInfo"
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
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
        },
        {
          "name": "custodyPriceUpdate",
          "optional": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getPnlAndFeeParams"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "pnlAndFee"
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
          "name": "custody"
        },
        {
          "name": "custodyOracleAccount"
        },
        {
          "name": "collateralCustody"
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
      "returns": "bool"
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
          "name": "custodyPriceUpdate",
          "optional": true
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "oraclePriceInfo"
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
      "name": "getExactOutSwapAmountAndFees",
      "discriminator": [
        196,
        32,
        218,
        118,
        151,
        233,
        43,
        56
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
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getExactOutSwapAmountAndFeesParams"
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
      "returns": "u128"
    },
    {
      "name": "getAssetsUnderManagement2",
      "discriminator": [
        193,
        210,
        13,
        249,
        113,
        149,
        29,
        84
      ],
      "accounts": [
        {
          "name": "perpetuals"
        },
        {
          "name": "pool"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getAssetsUnderManagement2Params"
            }
          }
        }
      ],
      "returns": "u128"
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
      "name": "testOracle",
      "discriminator": [
        198,
        49,
        63,
        134,
        232,
        251,
        168,
        28
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
      "name": "positionRequest",
      "discriminator": [
        12,
        38,
        250,
        199,
        46,
        154,
        32,
        216
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
    }
  ],
  "events": [
    {
      "name": "createPositionRequestEvent",
      "discriminator": [
        2,
        238,
        94,
        53,
        105,
        211,
        46,
        186
      ]
    },
    {
      "name": "instantCreateTpslEvent",
      "discriminator": [
        242,
        54,
        6,
        95,
        24,
        141,
        103,
        198
      ]
    },
    {
      "name": "instantUpdateTpslEvent",
      "discriminator": [
        177,
        22,
        47,
        37,
        120,
        246,
        17,
        101
      ]
    },
    {
      "name": "closePositionRequestEvent",
      "discriminator": [
        21,
        34,
        92,
        158,
        224,
        29,
        180,
        243
      ]
    },
    {
      "name": "increasePositionEvent",
      "discriminator": [
        245,
        113,
        85,
        52,
        214,
        187,
        153,
        132
      ]
    },
    {
      "name": "increasePositionPreSwapEvent",
      "discriminator": [
        237,
        107,
        9,
        139,
        22,
        75,
        4,
        213
      ]
    },
    {
      "name": "decreasePositionEvent",
      "discriminator": [
        64,
        156,
        43,
        74,
        109,
        131,
        16,
        127
      ]
    },
    {
      "name": "decreasePositionPostSwapEvent",
      "discriminator": [
        23,
        210,
        16,
        233,
        98,
        245,
        89,
        82
      ]
    },
    {
      "name": "liquidateFullPositionEvent",
      "discriminator": [
        128,
        101,
        71,
        168,
        128,
        72,
        86,
        84
      ]
    },
    {
      "name": "poolSwapEvent",
      "discriminator": [
        40,
        107,
        212,
        26,
        223,
        136,
        39,
        220
      ]
    },
    {
      "name": "poolSwapExactOutEvent",
      "discriminator": [
        121,
        118,
        11,
        11,
        198,
        66,
        142,
        115
      ]
    },
    {
      "name": "addLiquidityEvent",
      "discriminator": [
        27,
        178,
        153,
        186,
        47,
        196,
        140,
        45
      ]
    },
    {
      "name": "removeLiquidityEvent",
      "discriminator": [
        141,
        199,
        182,
        123,
        159,
        94,
        215,
        102
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "mathOverflow",
      "msg": "Overflow in arithmetic operation"
    },
    {
      "code": 6001,
      "name": "unsupportedOracle",
      "msg": "Unsupported price oracle"
    },
    {
      "code": 6002,
      "name": "invalidOracleAccount",
      "msg": "Invalid oracle account"
    },
    {
      "code": 6003,
      "name": "staleOraclePrice",
      "msg": "Stale oracle price"
    },
    {
      "code": 6004,
      "name": "invalidOraclePrice",
      "msg": "Invalid oracle price"
    },
    {
      "code": 6005,
      "name": "invalidEnvironment",
      "msg": "Instruction is not allowed in production"
    },
    {
      "code": 6006,
      "name": "invalidCollateralAccount",
      "msg": "Invalid collateral account"
    },
    {
      "code": 6007,
      "name": "invalidCollateralAmount",
      "msg": "Invalid collateral amount"
    },
    {
      "code": 6008,
      "name": "collateralSlippage",
      "msg": "Collateral slippage"
    },
    {
      "code": 6009,
      "name": "invalidPositionState",
      "msg": "Invalid position state"
    },
    {
      "code": 6010,
      "name": "invalidPerpetualsConfig",
      "msg": "Invalid perpetuals config"
    },
    {
      "code": 6011,
      "name": "invalidPoolConfig",
      "msg": "Invalid pool config"
    },
    {
      "code": 6012,
      "name": "invalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6013,
      "name": "invalidCustodyConfig",
      "msg": "Invalid custody config"
    },
    {
      "code": 6014,
      "name": "invalidCustodyBalance",
      "msg": "Invalid custody balance"
    },
    {
      "code": 6015,
      "name": "invalidArgument",
      "msg": "Invalid argument"
    },
    {
      "code": 6016,
      "name": "invalidPositionRequest",
      "msg": "Invalid position request"
    },
    {
      "code": 6017,
      "name": "invalidPositionRequestInputAta",
      "msg": "Invalid position request input ata"
    },
    {
      "code": 6018,
      "name": "invalidMint",
      "msg": "Invalid mint"
    },
    {
      "code": 6019,
      "name": "insufficientTokenAmount",
      "msg": "Insufficient token amount"
    },
    {
      "code": 6020,
      "name": "insufficientAmountReturned",
      "msg": "Insufficient token amount returned"
    },
    {
      "code": 6021,
      "name": "maxPriceSlippage",
      "msg": "Price slippage limit exceeded"
    },
    {
      "code": 6022,
      "name": "maxLeverage",
      "msg": "Position leverage limit exceeded"
    },
    {
      "code": 6023,
      "name": "custodyAmountLimit",
      "msg": "Custody amount limit exceeded"
    },
    {
      "code": 6024,
      "name": "poolAmountLimit",
      "msg": "Pool amount limit exceeded"
    },
    {
      "code": 6025,
      "name": "personalPoolAmountLimit",
      "msg": "Personal pool amount limit exceeded"
    },
    {
      "code": 6026,
      "name": "unsupportedToken",
      "msg": "Token is not supported"
    },
    {
      "code": 6027,
      "name": "instructionNotAllowed",
      "msg": "Instruction is not allowed at this time"
    },
    {
      "code": 6028,
      "name": "jupiterProgramMismatch",
      "msg": "Jupiter Program ID mismatch"
    },
    {
      "code": 6029,
      "name": "programMismatch",
      "msg": "Program ID mismatch"
    },
    {
      "code": 6030,
      "name": "addressMismatch",
      "msg": "Address mismatch"
    },
    {
      "code": 6031,
      "name": "keeperAtaMissing",
      "msg": "Missing keeper ATA"
    },
    {
      "code": 6032,
      "name": "swapAmountMismatch",
      "msg": "Swap amount mismatch"
    },
    {
      "code": 6033,
      "name": "cpiNotAllowed",
      "msg": "CPI not allowed"
    },
    {
      "code": 6034,
      "name": "invalidKeeper",
      "msg": "Invalid Keeper"
    },
    {
      "code": 6035,
      "name": "exceedExecutionPeriod",
      "msg": "Exceed execution period"
    },
    {
      "code": 6036,
      "name": "invalidRequestType",
      "msg": "Invalid Request Type"
    },
    {
      "code": 6037,
      "name": "invalidTriggerPrice",
      "msg": "Invalid Trigger Price"
    },
    {
      "code": 6038,
      "name": "triggerPriceSlippage",
      "msg": "Trigger Price Slippage"
    },
    {
      "code": 6039,
      "name": "missingTriggerPrice",
      "msg": "Missing Trigger Price"
    },
    {
      "code": 6040,
      "name": "missingPriceSlippage",
      "msg": "Missing Price Slippage"
    },
    {
      "code": 6041,
      "name": "invalidPriceCalcMode",
      "msg": "Invalid Price Calc Mode"
    },
    {
      "code": 6042,
      "name": "requestUpdatedTooRecent",
      "msg": "Request Updated Too Recent"
    },
    {
      "code": 6043,
      "name": "exceedTokenWeightage",
      "msg": "Exceed Token Weightage"
    },
    {
      "code": 6044,
      "name": "oraclePublishTimeTooEarly",
      "msg": "Oracle Publish Time Too Early"
    },
    {
      "code": 6045,
      "name": "pullOraclePublishTimeTooEarly",
      "msg": "Pull Oracle Publish Time Too Early"
    },
    {
      "code": 6046,
      "name": "stalePullOraclePrice",
      "msg": "Stale Pull Oracle Price"
    },
    {
      "code": 6047,
      "name": "invalidPullOraclePrice",
      "msg": "Invalid Pull Oracle Price"
    },
    {
      "code": 6048,
      "name": "pullOracleNotVerified",
      "msg": "Pull Oracle Not Verified"
    },
    {
      "code": 6049,
      "name": "priceDiffTooLarge",
      "msg": "Price Diff Between Pull and Push Oracle is Too Large"
    },
    {
      "code": 6050,
      "name": "invalidDovesOraclePrice",
      "msg": "Invalid Doves Oracle Price"
    }
  ],
  "types": [
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
            "name": "hourlyFundingDbps",
            "type": "u64"
          },
          {
            "name": "targetRatioBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addLiquidity2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAmountIn",
            "type": "u64"
          },
          {
            "name": "minLpAmountOut",
            "type": "u64"
          },
          {
            "name": "tokenAmountPreSwap",
            "type": {
              "option": "u64"
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
            "name": "tokenAmountIn",
            "type": "u64"
          },
          {
            "name": "minLpAmountOut",
            "type": "u64"
          },
          {
            "name": "tokenAmountPreSwap",
            "type": {
              "option": "u64"
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
            "name": "limit",
            "type": {
              "defined": {
                "name": "limit"
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
            "name": "maxRequestExecutionSec",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "closePositionRequestParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "createDecreasePositionMarketRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "priceSlippage",
            "type": "u64"
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "entirePosition",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "counter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createDecreasePositionRequest2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "requestType",
            "type": {
              "defined": {
                "name": "requestType"
              }
            }
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerPrice",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerAboveThreshold",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "entirePosition",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "counter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createDecreasePositionRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "requestType",
            "type": {
              "defined": {
                "name": "requestType"
              }
            }
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerPrice",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerAboveThreshold",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "entirePosition",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "counter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createIncreasePositionMarketRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralTokenDelta",
            "type": "u64"
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
            "name": "priceSlippage",
            "type": "u64"
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "counter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createIncreasePositionRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralTokenDelta",
            "type": "u64"
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
            "name": "requestType",
            "type": {
              "defined": {
                "name": "requestType"
              }
            }
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerPrice",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerAboveThreshold",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "counter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createTokenMetadataParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "decreasePosition2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "usePriceUpdate",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "decreasePosition3Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "usePriceUpdate",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "decreasePosition4Params",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "decreasePositionPostSwapParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getAddLiquidityAmountAndFee2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAmountIn",
            "type": "u64"
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
            "name": "tokenAmountIn",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getAssetsUnderManagement2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mode",
            "type": {
              "option": {
                "defined": {
                  "name": "priceCalcMode"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "getAssetsUnderManagementParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mode",
            "type": {
              "option": {
                "defined": {
                  "name": "priceCalcMode"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "getDecreasePositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getExactOutSwapAmountAndFeesParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getIncreasePositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralTokenDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
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
      "name": "getLiquidationStateParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getPnlAndFeeParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "getRemoveLiquidityAmountAndFee2Params",
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
          }
        ]
      }
    },
    {
      "name": "increasePosition2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "usePriceUpdate",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "increasePosition4Params",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "increasePositionPreSwapParams",
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
            "name": "allowIncreasePosition",
            "type": "bool"
          },
          {
            "name": "allowDecreasePosition",
            "type": "bool"
          },
          {
            "name": "allowCollateralWithdrawal",
            "type": "bool"
          },
          {
            "name": "allowLiquidatePosition",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "instantCreateTpslParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          },
          {
            "name": "triggerAboveThreshold",
            "type": "bool"
          },
          {
            "name": "entirePosition",
            "type": "bool"
          },
          {
            "name": "counter",
            "type": "u64"
          },
          {
            "name": "requestTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "instantUpdateTpslParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          },
          {
            "name": "requestTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "liquidateFullPosition2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "usePriceUpdate",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "liquidateFullPosition4Params",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "refreshAssetsUnderManagementParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "removeLiquidity2Params",
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
      "name": "setCustodyConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
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
            "name": "hourlyFundingDbps",
            "type": "u64"
          },
          {
            "name": "targetRatioBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setCustodyGlobalLimitParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxGlobalLongSizes",
            "type": "u64"
          },
          {
            "name": "maxGlobalShortSizes",
            "type": "u64"
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
      "name": "setPoolConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fees",
            "type": {
              "defined": {
                "name": "fees"
              }
            }
          },
          {
            "name": "limit",
            "type": {
              "defined": {
                "name": "limit"
              }
            }
          },
          {
            "name": "maxRequestExecutionSec",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "setTestOraclePriceParams",
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
            "name": "publishTime",
            "type": "i64"
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
      "name": "swap2Params",
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
          }
        ]
      }
    },
    {
      "name": "swapExactOutParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "maxAmountIn",
            "type": "u64"
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
            "name": "allowIncreasePosition",
            "type": "bool"
          },
          {
            "name": "allowDecreasePosition",
            "type": "bool"
          },
          {
            "name": "allowCollateralWithdrawal",
            "type": "bool"
          },
          {
            "name": "allowLiquidatePosition",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "transferAdminParams",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "updateDecreasePositionRequest2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateDecreasePositionRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateIncreasePositionRequestParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawFees2Params",
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
      "name": "assets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feesReserves",
            "type": "u64"
          },
          {
            "name": "owned",
            "type": "u64"
          },
          {
            "name": "locked",
            "type": "u64"
          },
          {
            "name": "guaranteedUsd",
            "type": "u64"
          },
          {
            "name": "globalShortSizes",
            "type": "u64"
          },
          {
            "name": "globalShortAveragePrices",
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
            "name": "tradeImpactFeeScalar",
            "type": "u64"
          },
          {
            "name": "buffer",
            "type": "u64"
          },
          {
            "name": "swapSpread",
            "type": "u64"
          },
          {
            "name": "maxLeverage",
            "type": "u64"
          },
          {
            "name": "maxGlobalLongSizes",
            "type": "u64"
          },
          {
            "name": "maxGlobalShortSizes",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fundingRateState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cumulativeInterestRate",
            "type": "u128"
          },
          {
            "name": "lastUpdate",
            "type": "i64"
          },
          {
            "name": "hourlyFundingDbps",
            "type": "u64"
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
            "name": "oracleType",
            "type": {
              "defined": {
                "name": "oracleType"
              }
            }
          },
          {
            "name": "maxPriceError",
            "type": "u64"
          },
          {
            "name": "maxPriceAgeSec",
            "type": "u32"
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
          },
          {
            "name": "feeBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "increasePositionInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "feeUsd",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "decreasePositionInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "feeUsd",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          },
          {
            "name": "hasProfit",
            "type": "bool"
          },
          {
            "name": "pnlDelta",
            "type": "u64"
          },
          {
            "name": "transferAmountUsd",
            "type": "u64"
          },
          {
            "name": "transferToken",
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
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "feeToken",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pnlAndFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hasProfit",
            "type": "bool"
          },
          {
            "name": "pnlDelta",
            "type": "u64"
          },
          {
            "name": "openPositionFeeUsd",
            "type": "u64"
          },
          {
            "name": "closePositionFeeUsd",
            "type": "u64"
          },
          {
            "name": "fundingFeeUsd",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "oraclePriceInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "increaseLong",
            "type": "u64"
          },
          {
            "name": "increaseShort",
            "type": "u64"
          },
          {
            "name": "decreaseLong",
            "type": "u64"
          },
          {
            "name": "decreaseShort",
            "type": "u64"
          },
          {
            "name": "buyLp",
            "type": "u64"
          },
          {
            "name": "sellLp",
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
            "name": "allowIncreasePosition",
            "type": "bool"
          },
          {
            "name": "allowDecreasePosition",
            "type": "bool"
          },
          {
            "name": "allowCollateralWithdrawal",
            "type": "bool"
          },
          {
            "name": "allowLiquidatePosition",
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
            "name": "increasePositionBps",
            "type": "u64"
          },
          {
            "name": "decreasePositionBps",
            "type": "u64"
          },
          {
            "name": "addRemoveLiquidityBps",
            "type": "u64"
          },
          {
            "name": "swapBps",
            "type": "u64"
          },
          {
            "name": "taxBps",
            "type": "u64"
          },
          {
            "name": "stableSwapBps",
            "type": "u64"
          },
          {
            "name": "stableSwapTaxBps",
            "type": "u64"
          },
          {
            "name": "liquidationRewardBps",
            "type": "u64"
          },
          {
            "name": "protocolShareBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "poolApr",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastUpdated",
            "type": "i64"
          },
          {
            "name": "feeAprBps",
            "type": "u64"
          },
          {
            "name": "realizedFeeUsd",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "limit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxAumUsd",
            "type": "u128"
          },
          {
            "name": "tokenWeightageBufferBps",
            "type": "u128"
          },
          {
            "name": "maxPositionUsd",
            "type": "u64"
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
            "name": "test"
          },
          {
            "name": "pyth"
          }
        ]
      }
    },
    {
      "name": "priceCalcMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "min"
          },
          {
            "name": "max"
          },
          {
            "name": "ignore"
          }
        ]
      }
    },
    {
      "name": "priceStaleTolerance",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "strict"
          },
          {
            "name": "loose"
          }
        ]
      }
    },
    {
      "name": "requestType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "market"
          },
          {
            "name": "trigger"
          }
        ]
      }
    },
    {
      "name": "requestChange",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "increase"
          },
          {
            "name": "decrease"
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
            "name": "targetRatioBps",
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
            "name": "fundingRateState",
            "type": {
              "defined": {
                "name": "fundingRateState"
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
      "name": "testOracle",
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
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "transferAuthorityBump",
            "type": "u8"
          },
          {
            "name": "perpetualsBump",
            "type": "u8"
          },
          {
            "name": "inceptionTime",
            "type": "i64"
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
            "name": "custodies",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "aumUsd",
            "type": "u128"
          },
          {
            "name": "limit",
            "type": {
              "defined": {
                "name": "limit"
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
            "name": "poolApr",
            "type": {
              "defined": {
                "name": "poolApr"
              }
            }
          },
          {
            "name": "maxRequestExecutionSec",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "lpTokenBump",
            "type": "u8"
          },
          {
            "name": "inceptionTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "positionRequest",
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
            "name": "custody",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "mint",
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
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralDelta",
            "type": "u64"
          },
          {
            "name": "requestChange",
            "type": {
              "defined": {
                "name": "requestChange"
              }
            }
          },
          {
            "name": "requestType",
            "type": {
              "defined": {
                "name": "requestType"
              }
            }
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
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "preSwapAmount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerPrice",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "triggerAboveThreshold",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "entirePosition",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "counter",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "referral",
            "type": {
              "option": "pubkey"
            }
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
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "custody",
            "type": "pubkey"
          },
          {
            "name": "collateralCustody",
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
            "name": "side",
            "type": {
              "defined": {
                "name": "side"
              }
            }
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "collateralUsd",
            "type": "u64"
          },
          {
            "name": "realisedPnlUsd",
            "type": "i64"
          },
          {
            "name": "cumulativeInterestSnapshot",
            "type": "u128"
          },
          {
            "name": "lockedAmount",
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
      "name": "createPositionRequestEvent",
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
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralMint",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "positionRequestMint",
            "type": "pubkey"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralDelta",
            "type": "u64"
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "preSwapAmount",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "requestChange",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "referral",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "instantCreateTpslEvent",
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
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "positionRequestMint",
            "type": "pubkey"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralDelta",
            "type": "u64"
          },
          {
            "name": "entirePosition",
            "type": "bool"
          },
          {
            "name": "openTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "instantUpdateTpslEvent",
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
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "positionRequestMint",
            "type": "pubkey"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralDelta",
            "type": "u64"
          },
          {
            "name": "entirePosition",
            "type": "bool"
          },
          {
            "name": "updateTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "closePositionRequestEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "entirePosition",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "requestChange",
            "type": "u8"
          },
          {
            "name": "requestType",
            "type": "u8"
          },
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "increasePositionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionSizeUsd",
            "type": "u64"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "positionRequestMint",
            "type": "pubkey"
          },
          {
            "name": "positionRequestChange",
            "type": "u8"
          },
          {
            "name": "positionRequestType",
            "type": "u8"
          },
          {
            "name": "positionRequestCollateralDelta",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralUsdDelta",
            "type": "u64"
          },
          {
            "name": "collateralTokenDelta",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "feeToken",
            "type": "u64"
          },
          {
            "name": "feeUsd",
            "type": "u64"
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "referral",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "increasePositionPreSwapEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "transferAmount",
            "type": "u64"
          },
          {
            "name": "collateralCustodyPreSwapAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "decreasePositionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionSizeUsd",
            "type": "u64"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "positionRequestMint",
            "type": "pubkey"
          },
          {
            "name": "positionRequestChange",
            "type": "u8"
          },
          {
            "name": "positionRequestType",
            "type": "u8"
          },
          {
            "name": "hasProfit",
            "type": "bool"
          },
          {
            "name": "pnlDelta",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "sizeUsdDelta",
            "type": "u64"
          },
          {
            "name": "transferAmountUsd",
            "type": "u64"
          },
          {
            "name": "transferToken",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "priceSlippage",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "feeUsd",
            "type": "u64"
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "referral",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "decreasePositionPostSwapEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionRequestKey",
            "type": "pubkey"
          },
          {
            "name": "swapAmount",
            "type": "u64"
          },
          {
            "name": "jupiterMinimumOut",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "liquidateFullPositionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "type": "pubkey"
          },
          {
            "name": "positionSide",
            "type": "u8"
          },
          {
            "name": "positionCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralCustody",
            "type": "pubkey"
          },
          {
            "name": "positionCollateralMint",
            "type": "pubkey"
          },
          {
            "name": "positionMint",
            "type": "pubkey"
          },
          {
            "name": "positionSizeUsd",
            "type": "u64"
          },
          {
            "name": "hasProfit",
            "type": "bool"
          },
          {
            "name": "pnlDelta",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "transferAmountUsd",
            "type": "u64"
          },
          {
            "name": "transferToken",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "feeUsd",
            "type": "u64"
          },
          {
            "name": "liquidationFeeUsd",
            "type": "u64"
          },
          {
            "name": "openTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "poolSwapEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receivingCustodyKey",
            "type": "pubkey"
          },
          {
            "name": "dispensingCustodyKey",
            "type": "pubkey"
          },
          {
            "name": "poolKey",
            "type": "pubkey"
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
            "name": "swapUsdAmount",
            "type": "u64"
          },
          {
            "name": "amountOutAfterFees",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "ownerKey",
            "type": "pubkey"
          },
          {
            "name": "receivingAccountKey",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "poolSwapExactOutEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receivingCustodyKey",
            "type": "pubkey"
          },
          {
            "name": "dispensingCustodyKey",
            "type": "pubkey"
          },
          {
            "name": "poolKey",
            "type": "pubkey"
          },
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "amountInAfterFees",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          },
          {
            "name": "swapUsdAmount",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "ownerKey",
            "type": "pubkey"
          },
          {
            "name": "receivingAccountKey",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "addLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "custodyKey",
            "type": "pubkey"
          },
          {
            "name": "poolKey",
            "type": "pubkey"
          },
          {
            "name": "tokenAmountIn",
            "type": "u64"
          },
          {
            "name": "prePoolAmountUsd",
            "type": "u128"
          },
          {
            "name": "tokenAmountUsd",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "tokenAmountAfterFee",
            "type": "u64"
          },
          {
            "name": "mintAmountUsd",
            "type": "u64"
          },
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "postPoolAmountUsd",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "custodyKey",
            "type": "pubkey"
          },
          {
            "name": "poolKey",
            "type": "pubkey"
          },
          {
            "name": "lpAmountIn",
            "type": "u64"
          },
          {
            "name": "removeAmountUsd",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "removeTokenAmount",
            "type": "u64"
          },
          {
            "name": "tokenAmountAfterFee",
            "type": "u64"
          },
          {
            "name": "postPoolAmountUsd",
            "type": "u128"
          }
        ]
      }
    }
  ]
};
