import mongoose, { Document, Schema } from 'mongoose';

// Define the analytics data points interface
export interface IAnalyticData extends Document {
  date: Date;
  visitors: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  newUsers: number;
  revenue?: number;
  conversionRate?: number;
}

// Define the analytics by platform interface
export interface IPlatformData extends Document {
  name: string;
  value: number;
  percentage: number;
}

// Define the analytics by browser interface
export interface IBrowserData extends Document {
  name: string;
  percentage: number;
}

// Define the traffic source interface
export interface ITrafficSource extends Document {
  name: string;
  visitors: number;
  percentage: number;
}

// Create the analytics data points schema
const analyticDataSchema = new Schema<IAnalyticData>(
  {
    date: {
      type: Date,
      required: true,
    },
    visitors: {
      type: Number,
      required: true,
      default: 0,
    },
    pageViews: {
      type: Number,
      required: true,
      default: 0,
    },
    bounceRate: {
      type: Number,
      required: true,
      default: 0,
    },
    avgSessionDuration: {
      type: Number,
      required: true,
      default: 0,
    },
    newUsers: {
      type: Number,
      required: true,
      default: 0,
    },
    revenue: {
      type: Number,
    },
    conversionRate: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Create the platform data schema
const platformDataSchema = new Schema<IPlatformData>(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the browser data schema
const browserDataSchema = new Schema<IBrowserData>(
  {
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the traffic source schema
const trafficSourceSchema = new Schema<ITrafficSource>(
  {
    name: {
      type: String,
      required: true,
    },
    visitors: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the models
export const AnalyticData = mongoose.model<IAnalyticData>('AnalyticData', analyticDataSchema);
export const PlatformData = mongoose.model<IPlatformData>('PlatformData', platformDataSchema);
export const BrowserData = mongoose.model<IBrowserData>('BrowserData', browserDataSchema);
export const TrafficSource = mongoose.model<ITrafficSource>('TrafficSource', trafficSourceSchema);
