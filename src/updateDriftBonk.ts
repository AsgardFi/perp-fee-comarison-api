import fs from 'fs';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
import { FeeComparison } from '../src/modal';

import { parse } from 'csv-parse';

interface CSVRow {
  date: string;
  fundingRate: string;
  fundingRateLong: string;
  fundingRateShort: string;
}

const headers = ['date', 'fundingRate', 'fundingRateLong', 'fundingRateShort'];

const fileContent = fs.readFileSync('./scripts/1MBONK-PERP-funding-rate.csv', { encoding: 'utf-8' });

async function connectToMongoDB(): Promise<void> {
  const mongoURI = Bun.env.MONGO_URI;
  console.log(`MongoURI :: ${mongoURI}`);

  if (!mongoURI) {
    console.error('MONGO_URI is not set in the environment variables');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI, {
      autoIndex: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

function parseCSV(): Promise<CSVRow[]> {
  return new Promise((resolve, reject) => {
    parse(fileContent, {
      delimiter: ';',
      columns: headers,
    }, (error, result: CSVRow[]) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

async function processCSV(): Promise<void> {
  const records = await parseCSV();
  console.log(`Total records to process: ${records.length}`);

  for (const row of records) {
    try {
      const trimmedDate = row.date.trim();
      const fundingRate = parseFloat(row.fundingRate);

      // Parse CSV date (IST) and convert to UTC
      const csvDate = moment.tz(trimmedDate, 'M/D/YYYY, HH:mm:ss', 'Asia/Kolkata').utc();

      if (!csvDate.isValid()) {
        throw new Error(`Invalid date: ${trimmedDate}`);
      }

      if (isNaN(fundingRate)) {
        throw new Error(`Invalid funding rate: ${row.fundingRate}`);
      }

      // Find documents within the same hour (UTC)
      const startOfHour = csvDate.clone().startOf('hour').toDate().toISOString();
      const endOfHour = csvDate.clone().endOf('hour').toDate().toISOString();

      console.log(`Processing: ${trimmedDate}, ${fundingRate}`);
      console.log(`UTC range: ${startOfHour} - ${endOfHour}`);

      const result = await FeeComparison.findOneAndUpdate(
        {
          createdAt: {
            $gte: startOfHour,
            $lte: endOfHour,
          },
        },
        {
          $set: {
            'drift.BONKPerp.driftHourlyFunding': fundingRate,
          },
        },
        { new: true }
      );

      if (result) {
        console.log(`Updated document for ${csvDate.toISOString()} UTC`);
      } else {
        console.log(`No matching document found for ${csvDate.toISOString()} UTC`);
      }

      // Optional: Add a small delay to prevent overwhelming the database
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      console.error('Error processing row:', row);
      console.error('Error details:', error);
      // Continue processing other rows
    }
  }

  console.log('CSV file processing completed');
}
async function main() {
  try {
    await connectToMongoDB();
    await processCSV();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

main();