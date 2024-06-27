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
connectDB().then((e) => {
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
    console.log(`  Deposit Rate: ${(data.deposit*100).toFixed(2)}%`)
    console.log(`  Borrow Rate: ${(data.borrow*100).toFixed(2)}%`)
  }

  // JUP
  const [jupCurrentLTV, jupCurrentBorrowed, jupCurrentUtilization, jupHourlyBorrowRate] = await jupEntryPoint(connection)
  const jupAnnualRate = annualizeHourlyRate(jupHourlyBorrowRate);
  console.log("=============== JUP PERP =================")
  console.log(`Current LTV: ${jupCurrentLTV} SOL`)
  console.log(`Current Borrowed: ${jupCurrentBorrowed} SOL`)
  console.log(`Current Utilization: ${jupCurrentUtilization}%`)
  console.log(`Borrow Rate (hourly): ${jupHourlyBorrowRate.toFixed(4)}% / hr`)
  console.log(`Borrow Rate (annual): ${jupAnnualRate.toFixed(2)}%`)

  // Flash
  const [flashCurrentLTV, flashCurrentBorrowed, flashCurrentUtilization, flashHourlyBorrowRate] = await flashEntryPoint(connection)
  const flashAnnualRate = annualizeHourlyRate(flashHourlyBorrowRate);
  console.log("=============== FLASH PERP =================")
  console.log(`Current LTV: ${flashCurrentLTV} SOL`)
  console.log(`Current Borrowed: ${flashCurrentBorrowed} SOL`)
  console.log(`Current Utilization: ${flashCurrentUtilization}%`)
  console.log(`Borrow Rate (hourly): ${flashHourlyBorrowRate.toFixed(4)}% / hr`)
  console.log(`Borrow Rate (annual): ${flashAnnualRate.toFixed(2)}%`)

  // Drift
  // console.log("=============== DRIFT PERP =================")
  // const driftIRateMetadata = await driftEntryPoint(connection)
  // for (const [token, data] of Object.entries(driftIRateMetadata)) {
  //   console.log(`${token}:`)
  //   console.log(`  Long Funding Rate (annual): ${data.toFixed(2)}%`)
  // }

  // Kamino
  console.log("=============== Kamino =================")
  const kaminoIRateMetadata = await kaminoEntrypoint(connection)
  for (const [token, data] of Object.entries(kaminoIRateMetadata)) {
    console.log(`${token}:`)
    console.log(`  Deposit Rate: ${(data.deposit*100).toFixed(2)}%`)
    console.log(`  Borrow Rate: ${(data.borrow*100).toFixed(2)}%`)
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
    },
    jupPerp: {
      jupCurrentLTV,
      jupCurrentBorrowed,
      jupCurrentUtilization,
      jupHourlyBorrowRate
    },
    flashPerp: {
      flashCurrentLTV,
      flashCurrentBorrowed,
      flashCurrentUtilization,
      flashHourlyBorrowRate
    },
    // drift: {
    //   SOLPerp: {
    //     driftAnnualizedFunding: driftIRateMetadata.SOL
    //   },
    //   BonkPerp: {
    //     driftAnnualizedFunding: driftIRateMetadata.BONK
    //   }
    // },
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