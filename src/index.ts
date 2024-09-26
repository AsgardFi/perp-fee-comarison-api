import { Hono } from 'hono'
import { marginEntrypoint } from './marginfi'
import { jupEntryPoint } from './jup'
import { annualizeHourlyRate } from './utils'
import { flashEntryPoint } from './flp'
import { Connection } from '@solana/web3.js'
import { driftEntryPoint } from './drift'
import mongoose from 'mongoose';
import { FeeComparison, IFeeComparisonMetaData } from './modal'
import { kaminoEntrypoint } from './kamino'

type Bindings = {
  SYNC_RPC_ENDPOINT: string
}
const app = new Hono<{ Bindings: Bindings }>()

const connectDB = async () => {
  if (Bun.env.MONGO_URI === undefined) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }
  
  try {
    await mongoose.connect(Bun.env.MONGO_URI, {
      autoIndex: true,
      maxPoolSize: 10,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
    });
    
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });
    
  } catch (err: any) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    throw err;
  }
};

// Middleware to ensure DB is connected
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // 5 seconds

const ensureDBConnected = async (c: any, next: () => Promise<void>) => {
  let retries = 0;
  while (mongoose.connection.readyState !== 1 && retries < MAX_RETRIES) {
    try {
      await connectDB();
      break;
    } catch (err) {
      retries++;
      console.error(`Failed to connect to DB in middleware (attempt ${retries}/${MAX_RETRIES}):`, err);
      if (retries < MAX_RETRIES) {
        console.log(`I'm not dead yet! Retrying in ${RETRY_DELAY / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        console.log("I think I'm dead now. X_X");
        return c.text("Database connection failed. The server is taking a nap.", 503);
      }
    }
  }
  await next();
};

// Use the middleware in your Hono app
app.use('*', ensureDBConnected);

// Initialize DB connection when the app starts
connectDB().catch(err => {
  console.error('Initial DB connection failed:', err);
  // Optionally exit the process or implement a retry mechanism
});

app.get('/yesnope', async (ctx) => {
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
    drift: {},
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
    try {
      const feeComparison = await FeeComparison.create(feeMetadata)
      console.log(feeComparison.toJSON())
    } catch (err) {
      console.error('Error saving fee comparison:', err);
      return ctx.json({ error: 'Failed to save fee comparison' }, 500);
    }
  }

  return ctx.json(feeMetadata)
})

// Function to get documents within a date range
async function getFeeComparisonsByDateRange(from: string, to: string) {
  try {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    
    // Set the time to the end of the day for the 'to' date
    toDate.setHours(23, 59, 59, 999);

    const documents = await FeeComparison.find({
      createdAt: {
        $gte: fromDate,
        $lte: toDate
      }
    }, {
      _id: 0,    // Exclude _id
      __v: 0     // Exclude __v
    }).sort({ createdAt: 1 }); // Sort by createdAt in ascending order

    return documents;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
}

// Example usage
app.get('/fee-comparisons', async (ctx) => {
  const from = ctx.req.query('from'); // Expecting format: "YYYY-MM-DD"
  const to = ctx.req.query('to');     // Expecting format: "YYYY-MM-DD"

  if (!from || !to) {
    return ctx.json({ error: 'Missing from or to date' }, 400);
  }

  // Simple date format validation
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(from) || !dateRegex.test(to)) {
    return ctx.json({ error: 'Invalid date format. Use YYYY-MM-DD' }, 400);
  }

  try {
    const documents = await getFeeComparisonsByDateRange(from, to);
    return ctx.json(documents);
  } catch (error) {
    return ctx.json({ error: 'Failed to fetch documents' }, 500);
  }
});

export default {
  port: 6969,
  fetch: app.fetch,
}