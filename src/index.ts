import { Hono } from 'hono'
import { marginEntrypoint } from './marginfi'
import { jupEntryPoint } from './jup'
import { annualizeHourlyRate } from './utils'
import { flashEntryPoint } from './flp'
import { Connection } from '@solana/web3.js'
import { driftEntryPoint } from './drift'
import * as mongoose from 'mongoose';
import { FeeComparison, IFeeComparisonMetaData } from './modal'
import { kaminoEntrypoint } from './kamino'

type Bindings = {
  SYNC_RPC_ENDPOINT: string
}
const app = new Hono<{ Bindings: Bindings }>()

const connectDB = async () => {
  try {
    if (Bun.env.MONGO_URI !== undefined) {
      const conn = await mongoose.connect(Bun.env.MONGO_URI, {
        autoIndex: true,
      })
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
  } catch (err: any) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

const t0_0 = performance.now();
connectDB().then(() => {
  const t1_0 = performance.now();
  console.log(`Connecting database took ${(t1_0 - t0_0) / 1000}  seconds.`);
})

app.get('/', async (ctx) => {
  const isSave = ctx.req.query('save')
  console.log("isSave :: ", isSave)

  if (!Bun.env.SYNC_RPC_ENDPOINT) return ctx.text("RPC_ENDPOINT NOT FOUND")
  const connection = new Connection(Bun.env.SYNC_RPC_ENDPOINT, "confirmed");

  // Marginfi
  const marginIRateMetadata = await marginEntrypoint(connection)
  console.log("=============== Marginfi =================")
  for (const [token, data] of Object.entries(marginIRateMetadata)) {
    console.log(`${token}:`)
    console.log(`  Deposit Rate: ${(data.deposit * 100).toFixed(2)}%`)
    console.log(`  Borrow Rate: ${(data.borrow * 100).toFixed(2)}%`)
  }

  // JUP
  const jupIRateMetadata = await jupEntryPoint(connection)
  console.log("=============== JUP PERP =================")
  for (const [token, data] of Object.entries(jupIRateMetadata)) {
    console.log(`${token.toUpperCase()}:`)
    console.log(`  Current LTV: ${data.ltv} ${token.toUpperCase()}`)
    console.log(`  Current Borrowed: ${data.borrowed} ${token.toUpperCase()}`)
    console.log(`  Current Utilization: ${data.utilization}%`)
    console.log(`  Borrow Rate (hourly): ${data.borrowRate.toFixed(4)}% / hr`)
    console.log(`  Borrow Rate (annual): ${annualizeHourlyRate(data.borrowRate).toFixed(2)}%`)
  }

  // Flash
  const flashIRateMetadata = await flashEntryPoint(connection)
  console.log("=============== FLASH PERP =================")
  for (const [token, dataPromise] of Object.entries(flashIRateMetadata)) {
    const data = await dataPromise
    console.log(`${token.toUpperCase()}:`)
    console.log(`  Current LTV: ${data.ltv} ${token.toUpperCase()}`)
    console.log(`  Current Borrowed: ${data.borrowed} ${token.toUpperCase()}`)
    console.log(`  Current Utilization: ${data.utilization}%`)
    console.log(`  Borrow Rate (hourly): ${data.borrowRate.toFixed(4)}% / hr`)
    console.log(`  Borrow Rate (annual): ${annualizeHourlyRate(data.borrowRate).toFixed(2)}%`)
  }

  // Kamino
  console.log("=============== Kamino =================")
  const kaminoIRateMetadata = await kaminoEntrypoint(connection)
  for (const [token, data] of Object.entries(kaminoIRateMetadata)) {
    console.log(`${token}:`)
    console.log(`  Deposit Rate: ${(data.deposit * 100).toFixed(2)}%`)
    console.log(`  Borrow Rate: ${(data.borrow * 100).toFixed(2)}%`)
  }

  // Drift
  console.log("=============== DRIFT PERP =================")
  const driftIRateMetadata = await driftEntryPoint(connection)
  for (const [token, data] of Object.entries(driftIRateMetadata)) {
    console.log(`${token}:`)
    console.log(`  Long Funding Rate (annual): ${data.toFixed(2)}%`)
  }

  const feeMetadata: IFeeComparisonMetaData = {
    marginfi: {
      solToken: {
        depositIRate: marginIRateMetadata.SOL.deposit,
        borrowIRate: marginIRateMetadata.SOL.borrow,
      },
      usdcToken: {
        depositIRate: marginIRateMetadata.USDC.deposit,
        borrowIRate: marginIRateMetadata.USDC.borrow,
      },
      bonkToken: {
        depositIRate: marginIRateMetadata.BONK.deposit,
        borrowIRate: marginIRateMetadata.BONK.borrow,
      },
      usdtToken: {
        depositIRate: marginIRateMetadata.USDT.deposit,
        borrowIRate: marginIRateMetadata.USDT.borrow,
      },
      ethToken: {
        depositIRate: marginIRateMetadata.ETH.deposit,
        borrowIRate: marginIRateMetadata.ETH.borrow,
      },
    },
    jupPerp: {
      solToken: {
        CurrentLTV: jupIRateMetadata.sol.ltv,
        CurrentBorrowed: jupIRateMetadata.sol.borrowed,
        CurrentUtilization: jupIRateMetadata.sol.utilization,
        HourlyBorrowRate: jupIRateMetadata.sol.borrowRate
      },
      ethToken: {
        CurrentLTV: jupIRateMetadata.eth.ltv,
        CurrentBorrowed: jupIRateMetadata.eth.borrowed,
        CurrentUtilization: jupIRateMetadata.eth.utilization,
        HourlyBorrowRate: jupIRateMetadata.eth.borrowRate
      },
    },
    flashPerp: {
      solToken: {
        CurrentLTV: (await flashIRateMetadata.sol).ltv,
        CurrentBorrowed: (await flashIRateMetadata.sol).borrowed,
        CurrentUtilization: (await flashIRateMetadata.sol).utilization,
        HourlyBorrowRate: (await flashIRateMetadata.sol).borrowRate
      },
      ethToken: {
        CurrentLTV: (await flashIRateMetadata.eth).ltv,
        CurrentBorrowed: (await flashIRateMetadata.eth).borrowed,
        CurrentUtilization: (await flashIRateMetadata.eth).utilization,
        HourlyBorrowRate: (await flashIRateMetadata.eth).borrowRate
      },
      bonkToken: {
        CurrentLTV: (await flashIRateMetadata.bonk).ltv,
        CurrentBorrowed: (await flashIRateMetadata.bonk).borrowed,
        CurrentUtilization: (await flashIRateMetadata.bonk).utilization,
        HourlyBorrowRate: (await flashIRateMetadata.bonk).borrowRate
      },
    },
    drift: {
      SOLPerp: {
        driftHourlyFunding: driftIRateMetadata.SOLHourlyFundingRate
      }
    },
    kamino: {
      solToken: {
        depositIRate: kaminoIRateMetadata.SOL.deposit,
        borrowIRate: kaminoIRateMetadata.SOL.borrow,
      },
      usdcToken: {
        depositIRate: kaminoIRateMetadata.USDC.deposit,
        borrowIRate: kaminoIRateMetadata.USDC.borrow,
      },
      bonkToken: {
        depositIRate: kaminoIRateMetadata.BONK.deposit,
        borrowIRate: kaminoIRateMetadata.BONK.borrow,
      },
      usdtToken: {
        depositIRate: kaminoIRateMetadata.USDT.deposit,
        borrowIRate: kaminoIRateMetadata.USDT.borrow,
      },
      ethToken: {
        depositIRate: kaminoIRateMetadata.ETH.deposit,
        borrowIRate: kaminoIRateMetadata.ETH.borrow,
      },
    }
  }

  if (isSave) {
    console.log("Saving the data into the database")
    const feeComparison = await FeeComparison.create(feeMetadata)
    console.log(feeComparison.toJSON())
  }

  return ctx.json(feeMetadata)
})

export default {
  port: 6969,
  fetch: app.fetch,
}