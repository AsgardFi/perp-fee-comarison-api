import { Hono } from 'hono'
import { marginEnterypoint } from './marginfi'
import { jupEntryPoint } from './jup'
import { annualizeHourlyRate } from './utils'
import { flashEntryPoint } from './flp'
import { Connection } from '@solana/web3.js'
import { driftEntryPoint } from './drift'

type Bindings = {
  SYNC_RPC_ENDPOINT: string
}
const app = new Hono<{ Bindings: Bindings }>()

interface ComparisonMetaData {
  marginfi: {
      depositTokenIRate: number,
      borrowTokenIRate: number,
      netApy: number
  },
  jupPerp: {
      jupCurrentLTV: number,
      jupCurrentBorrowed: number,
      jupCurrentUtilization: number,
      jupAnnualRate: number,

  },
  flashPerp: {
      flashCurrentLTV: number,
      flashCurrentBorrowed: number,
      flashCurrentUtilization: number,
      flashAnnualRate: number,
  },
  drfit: {
    driftAnnualizedFunding: number
  }
}

app.get('/', async (ctx) => {
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
    const metadata: ComparisonMetaData = {
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
        drfit: {
            driftAnnualizedFunding
        }
    }

    return ctx.json(metadata)
})

export default { 
    port: 6969, 
    fetch: app.fetch, 
  } 