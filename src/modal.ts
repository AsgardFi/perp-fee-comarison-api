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
        usdtToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        ethToken: {
            depositIRate: number,
            borrowIRate: number,
        },
    },
    jupPerp: {
        solToken: {
            CurrentLTV: number,
            CurrentBorrowed: number,
            CurrentUtilization: number,
            HourlyBorrowRate: number
        },
        ethToken: {
            CurrentLTV: number,
            CurrentBorrowed: number,
            CurrentUtilization: number,
            HourlyBorrowRate: number
        },
    },
    flashPerp: {
        solToken: {
            CurrentLTV: number,
            CurrentBorrowed: number,
            CurrentUtilization: number,
            HourlyBorrowRate: number
        },
        ethToken: {
            CurrentLTV: number,
            CurrentBorrowed: number,
            CurrentUtilization: number,
            HourlyBorrowRate: number
        },
        bonkToken: {
            CurrentLTV: number,
            CurrentBorrowed: number,
            CurrentUtilization: number,
            HourlyBorrowRate: number
        },
    },
    drift: {
        SOLPerp: {
            driftHourlyFunding: number
        },
        BONKPerp?: {
            driftHourlyFunding: Number
        }
    },
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
        usdtToken: {
            depositIRate: number,
            borrowIRate: number,
        },
        ethToken: {
            depositIRate: number,
            borrowIRate: number,
        },
    }
}

interface IFeeComparisonDoc extends IFeeComparisonMetaData, Document { }

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
            usdtToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            ethToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
        },
        jupPerp: {
            solToken: {
                CurrentLTV: { type: Number, required: true },
                CurrentBorrowed: { type: Number, required: true },
                CurrentUtilization: { type: Number, required: true },
                HourlyBorrowRate: { type: Number, required: true }
            },
            ethToken: {
                CurrentLTV: { type: Number, required: true },
                CurrentBorrowed: { type: Number, required: true },
                CurrentUtilization: { type: Number, required: true },
                HourlyBorrowRate: { type: Number, required: true }
            },
        },
        flashPerp: {
            solToken: {
                CurrentLTV: { type: Number, required: true },
                CurrentBorrowed: { type: Number, required: true },
                CurrentUtilization: { type: Number, required: true },
                HourlyBorrowRate: { type: Number, required: true }
            },
            ethToken: {
                CurrentLTV: { type: Number, required: true },
                CurrentBorrowed: { type: Number, required: true },
                CurrentUtilization: { type: Number, required: true },
                HourlyBorrowRate: { type: Number, required: true }
            },
            bonkToken: {
                CurrentLTV: { type: Number, required: true },
                CurrentBorrowed: { type: Number, required: true },
                CurrentUtilization: { type: Number, required: true },
                HourlyBorrowRate: { type: Number, required: true }
            },
        },
        drift: {
            SOLPerp: {
                driftHourlyFunding: { type: Number, required: true }
            },
            BONKPerp: {
                driftHourlyFunding: { type: Number, required: false }
            }
        },
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
            usdtToken: {
                depositIRate: { type: Number, required: true },
                borrowIRate: { type: Number, required: true },
            },
            ethToken: {
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