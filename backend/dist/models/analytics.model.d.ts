import mongoose, { Document } from 'mongoose';
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
export interface IPlatformData extends Document {
    name: string;
    value: number;
    percentage: number;
}
export interface IBrowserData extends Document {
    name: string;
    percentage: number;
}
export interface ITrafficSource extends Document {
    name: string;
    visitors: number;
    percentage: number;
}
export declare const AnalyticData: mongoose.Model<IAnalyticData, {}, {}, {}, mongoose.Document<unknown, {}, IAnalyticData> & IAnalyticData & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export declare const PlatformData: mongoose.Model<IPlatformData, {}, {}, {}, mongoose.Document<unknown, {}, IPlatformData> & IPlatformData & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export declare const BrowserData: mongoose.Model<IBrowserData, {}, {}, {}, mongoose.Document<unknown, {}, IBrowserData> & IBrowserData & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export declare const TrafficSource: mongoose.Model<ITrafficSource, {}, {}, {}, mongoose.Document<unknown, {}, ITrafficSource> & ITrafficSource & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
