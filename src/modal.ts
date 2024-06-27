import { Document, Schema, model } from 'mongoose';

export interface IFeeComparisonMetaData {
    marginfi: {
        solToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        usdcToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        bonkToken: {
            depositIRate: number,
            borrowIRate: number,
        },
    },
    jupPerp: {
        jupCurrentLTV: number,
        jupCurrentBorrowed: number,
        jupCurrentUtilization: number,
        jupHourlyBorrowRate: number
    },
    flashPerp: {
        flashCurrentLTV: number,
        flashCurrentBorrowed: number,
        flashCurrentUtilization: number,
        flashHourlyBorrowRate: number
    },
    // drift: {
    //     SOLPerp: {
    //         driftAnnualizedFunding: number
    //     },
    //     BonkPerp: {
    //         driftAnnualizedFunding: number
    //     }
    // },
    kamino: {
        solToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        usdcToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        bonkToken: {
            depositIRate: number,
            borrowIRate: number,
        },
    }
}

interface IFeeComparisonDoc extends IFeeComparisonMetaData, Document {}

const feeComparisonSchema = new Schema<IFeeComparisonDoc>(
    {
        marginfi: {
            solToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            usdcToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            bonkToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
        },
        jupPerp: {
            jupCurrentLTV: { type: Number, required: true },
            jupCurrentBorrowed: { type: Number, required: true },
            jupCurrentUtilization: { type: Number, required: true },
            jupHourlyBorrowRate: { type: Number, required: true }
        },
        flashPerp: {
            flashCurrentLTV: { type: Number, required: true },
            flashCurrentBorrowed: { type: Number, required: true },
            flashCurrentUtilization: { type: Number, required: true },
            flashHourlyBorrowRate: { type: Number, required: true }
        },
        // drift: {
        //     SOLPerp: {
        //         driftAnnualizedFunding: { type: Number, required: true }
        //     },
        //     BonkPerp: {
        //         driftAnnualizedFunding: { type: Number, required: true }
        //     }
        // },
        kamino: {
            solToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            usdcToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            bonkToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
        }
    },
    {
        timestamps: true
    }
);

const FeeComparison = model<IFeeComparisonDoc>('FeeComparison', feeComparisonSchema);

export { FeeComparison };