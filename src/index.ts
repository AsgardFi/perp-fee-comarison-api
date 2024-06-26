import { Hono } from 'hono'
import { marginEnterypoint } from './marginfi'
import { jupEntryPoint } from './jup'
import { annualizeHourlyRate } from './utils'
import { flashEntryPoint } from './flp'
import { Connection } from '@solana/web3.js'
import { driftEntryPoint } from './drift'
import * as mongoose from 'mongoose';
import { FeeComparison, IFeeComparisonMetaData } from './modal'

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

    // ===========================================
    // Marginfi
    const [depositTokenIRate, borrowTokenIRate, netApy] = await marginEnterypoint(connection)
    console.log("=============== Marginfi =================")
    console.log(`
        depositTokenIRate  :: ${(depositTokenIRate * 100).toFixed(2)}%
        borrowTokenIRate :: ${(borrowTokenIRate * 100).toFixed(2)}%
        Annualized borrow rate :: ${(netApy * 100).toFixed(2)}%
    `)

    // ===========================================
    // JUP
    const [jupCurrentLTV, jupCurrentBorrowed, jupCurrentUtilization, jupHourlyBorrowRate] = await jupEntryPoint(connection)
    const jupAnnualRate = annualizeHourlyRate(jupHourlyBorrowRate);

    console.log("=============== JUP PERP =================")
    console.log(`
        currentLTV :: ${jupCurrentLTV} SOL
        currentBorrowed :: ${jupCurrentBorrowed} SOL
        currentUtilization :: ${jupCurrentUtilization} %
        borrowRate per hour :: ${jupHourlyBorrowRate.toFixed(4)}% / hr
        Annualized borrow rate: ${jupAnnualRate.toFixed(2)}%
    `)

    // ===========================================
    // Flash
    const [flashCurrentLTV, flashCurrentBorrowed, flashCurrentUtilization, flashHourlyBorrowRate] = await flashEntryPoint(connection)
    const flashAnnualRate = annualizeHourlyRate(flashHourlyBorrowRate);
    
    console.log("=============== FLASH PERP =================")
    console.log(`
        currentLTV: ${flashCurrentLTV} SOL
        currentBorrowed: ${flashCurrentBorrowed} SOL
        currentUtilization:  ${flashCurrentUtilization} %
        borrowRate per hour:  ${flashHourlyBorrowRate.toFixed(4)}% / hr
        Annualized borrow rate: ${flashAnnualRate.toFixed(2)}%
    `)

    // ===========================================
    // Drift
    console.log("=============== DRIFT PERP =================")
    const [driftAnnualizedFunding] = await driftEntryPoint(connection)
    console.log(`
        Annualized Funding rate: ${driftAnnualizedFunding.toFixed(2)}%
    `)
    const feeMetadata: IFeeComparisonMetaData = {
        marginfi: {
            depositTokenIRate,
            borrowTokenIRate,
            netApy
        },
        jupPerp: {
            jupCurrentLTV,
            jupCurrentBorrowed,
            jupCurrentUtilization,
            jupAnnualRate,
    
        },
        flashPerp: {
            flashCurrentLTV,
            flashCurrentBorrowed,
            flashCurrentUtilization,
            flashAnnualRate,
        },
        drift: {
            driftAnnualizedFunding
        }
    }

    if (isSave) {
        console.log("saving the data into the database")
        const feeComaprison = await FeeComparison.create(feeMetadata)
        console.log(feeComaprison.toJSON())
    }

    return ctx.json(feeMetadata)
})

export default { 
    port: 6969, 
    fetch: app.fetch, 
  } 