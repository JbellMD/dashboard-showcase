import { Request, Response, NextFunction } from 'express';
export declare const getAnalyticsOverview: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getPlatformDistribution: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getBrowserStats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTrafficSources: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const seedAnalyticsData: (req: Request, res: Response, next: NextFunction) => Promise<void>;
