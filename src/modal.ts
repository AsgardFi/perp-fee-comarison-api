import { Document, Schema, model } from 'mongoose';

export interface IFeeComparisonMetaData {
    marginfi: {
        depositTokenIRate: number,
        borrowTokenIRate: number,
        netApy: number
    },
    jupPerp: {
        jupCurrentLTV: number,
        jupCurrentBorrowed: number,
        jupCurrentUtilization: number,
        jupAnnualRate: number
    },
    flashPerp: {
        flashCurrentLTV: number,
        flashCurrentBorrowed: number,
        flashCurrentUtilization: number,
        flashAnnualRate: number
    },
    drift: {
        driftAnnualizedFunding: number
    }
}

interface IFeeComparisonDoc extends IFeeComparisonMetaData, Document {}

const feeComparisonSchema = new Schema<IFeeComparisonDoc>(
    {
        marginfi: {
            depositTokenIRate: { type: Number, required: true },
            borrowTokenIRate: { type: Number, required: true },
            netApy: { type: Number, required: true }
        },
        jupPerp: {
            jupCurrentLTV: { type: Number, required: true },
            jupCurrentBorrowed: { type: Number, required: true },
            jupCurrentUtilization: { type: Number, required: true },
            jupAnnualRate: { type: Number, required: true }
        },
        flashPerp: {
            flashCurrentLTV: { type: Number, required: true },
            flashCurrentBorrowed: { type: Number, required: true },
            flashCurrentUtilization: { type: Number, required: true },
            flashAnnualRate: { type: Number, required: true }
        },
        drift: {
            driftAnnualizedFunding: { type: Number, required: true }
        }
    },
    {
        timestamps: true
    }
);

const FeeComparison = model<IFeeComparisonDoc>('FeeComparison', feeComparisonSchema);

export { FeeComparison };