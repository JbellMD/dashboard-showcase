import { Request, Response, NextFunction } from 'express';
import { 
  AnalyticData, 
  PlatformData, 
  BrowserData,
  TrafficSource
} from '../models/analytics.model';
import { ApiError } from '../middlewares/error.middleware';

// Get analytics overview data
export const getAnalyticsOverview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get current date and date from 30 days ago
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    // Query analytics data for the past 30 days
    const analyticsData = await AnalyticData.find({
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: 1 });
    
    // Calculate totals and averages
    const totalVisitors = analyticsData.reduce((sum, data) => sum + data.visitors, 0);
    const totalPageViews = analyticsData.reduce((sum, data) => sum + data.pageViews, 0);
    const totalNewUsers = analyticsData.reduce((sum, data) => sum + data.newUsers, 0);
    const avgBounceRate = analyticsData.reduce((sum, data) => sum + data.bounceRate, 0) / analyticsData.length;
    const avgSessionDuration = analyticsData.reduce((sum, data) => sum + data.avgSessionDuration, 0) / analyticsData.length;
    
    // Query previous period for comparison
    const prevStartDate = new Date(startDate);
    prevStartDate.setDate(prevStartDate.getDate() - 30);
    
    const prevEndDate = new Date(startDate);
    prevEndDate.setDate(prevEndDate.getDate() - 1);
    
    const prevAnalyticsData = await AnalyticData.find({
      date: { $gte: prevStartDate, $lte: prevEndDate }
    });
    
    // Calculate previous period totals
    const prevTotalVisitors = prevAnalyticsData.reduce((sum, data) => sum + data.visitors, 0);
    const prevTotalPageViews = prevAnalyticsData.reduce((sum, data) => sum + data.pageViews, 0);
    const prevTotalNewUsers = prevAnalyticsData.reduce((sum, data) => sum + data.newUsers, 0);
    const prevAvgBounceRate = prevAnalyticsData.reduce((sum, data) => sum + data.bounceRate, 0) / (prevAnalyticsData.length || 1);
    
    // Calculate change percentages
    const visitorsChange = prevTotalVisitors ? ((totalVisitors - prevTotalVisitors) / prevTotalVisitors) * 100 : 0;
    const pageViewsChange = prevTotalPageViews ? ((totalPageViews - prevTotalPageViews) / prevTotalPageViews) * 100 : 0;
    const newUsersChange = prevTotalNewUsers ? ((totalNewUsers - prevTotalNewUsers) / prevTotalNewUsers) * 100 : 0;
    const bounceRateChange = prevAvgBounceRate ? ((avgBounceRate - prevAvgBounceRate) / prevAvgBounceRate) * 100 : 0;
    
    res.status(200).json({
      success: true,
      data: {
        trafficOverview: [
          { 
            id: 1, 
            name: 'Total Visitors', 
            value: totalVisitors.toLocaleString(), 
            change: parseFloat(visitorsChange.toFixed(1)) 
          },
          { 
            id: 2, 
            name: 'Page Views', 
            value: totalPageViews.toLocaleString(), 
            change: parseFloat(pageViewsChange.toFixed(1)) 
          },
          { 
            id: 3, 
            name: 'New Users', 
            value: totalNewUsers.toLocaleString(), 
            change: parseFloat(newUsersChange.toFixed(1)) 
          },
          { 
            id: 4, 
            name: 'Bounce Rate', 
            value: `${avgBounceRate.toFixed(1)}%`, 
            change: parseFloat(bounceRateChange.toFixed(1)) * -1 // Negative is good for bounce rate
          },
          { 
            id: 5, 
            name: 'Avg. Session', 
            value: `${Math.floor(avgSessionDuration / 60)}m ${Math.floor(avgSessionDuration % 60)}s`, 
            change: 0 // Placeholder
          }
        ],
        dailyData: analyticsData.map(data => ({
          date: data.date,
          visitors: data.visitors,
          pageViews: data.pageViews,
          newUsers: data.newUsers,
          bounceRate: data.bounceRate
        }))
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get platform distribution data
export const getPlatformDistribution = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const platformData = await PlatformData.find().sort({ value: -1 });
    
    res.status(200).json({
      success: true,
      data: platformData,
    });
  } catch (error) {
    next(error);
  }
};

// Get browser statistics
export const getBrowserStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const browserData = await BrowserData.find().sort({ percentage: -1 });
    
    res.status(200).json({
      success: true,
      data: browserData,
    });
  } catch (error) {
    next(error);
  }
};

// Get traffic sources
export const getTrafficSources = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trafficSources = await TrafficSource.find().sort({ visitors: -1 });
    
    res.status(200).json({
      success: true,
      data: trafficSources,
    });
  } catch (error) {
    next(error);
  }
};

// Seed analytics data (for development purposes)
export const seedAnalyticsData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Only allow in development environment
    if (process.env.NODE_ENV !== 'development') {
      throw new ApiError('This endpoint is only available in development mode', 403);
    }
    
    // Clear existing data
    await AnalyticData.deleteMany({});
    await PlatformData.deleteMany({});
    await BrowserData.deleteMany({});
    await TrafficSource.deleteMany({});
    
    // Generate random analytics data for the past 60 days
    const analyticData = [];
    const currentDate = new Date();
    
    for (let i = 60; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      
      // Generate random data with some trends
      const baseVisitors = 3000 + Math.floor(Math.random() * 500);
      const trend = i < 30 ? 1.2 : 1; // Recent data shows 20% improvement
      const weekendReduction = date.getDay() === 0 || date.getDay() === 6 ? 0.7 : 1; // Weekend traffic is lower
      
      const visitors = Math.floor(baseVisitors * trend * weekendReduction);
      const pageViews = visitors * (2 + Math.random());
      const bounceRate = 25 + Math.random() * 15;
      const newUsers = visitors * (0.3 + Math.random() * 0.2);
      const avgSessionDuration = 120 + Math.random() * 180;
      
      analyticData.push({
        date,
        visitors,
        pageViews: Math.floor(pageViews),
        bounceRate,
        avgSessionDuration,
        newUsers: Math.floor(newUsers),
        revenue: visitors * 0.05 * (1 + Math.random() * 0.5),
        conversionRate: 1 + Math.random() * 4
      });
    }
    
    await AnalyticData.insertMany(analyticData);
    
    // Create platform distribution data
    const platformData = [
      { name: 'Mobile', value: 45, percentage: 45 },
      { name: 'Desktop', value: 35, percentage: 35 },
      { name: 'Tablet', value: 20, percentage: 20 }
    ];
    
    await PlatformData.insertMany(platformData);
    
    // Create browser statistics data
    const browserData = [
      { name: 'Chrome', percentage: 64.5 },
      { name: 'Safari', percentage: 18.2 },
      { name: 'Firefox', percentage: 7.8 },
      { name: 'Edge', percentage: 6.2 },
      { name: 'Others', percentage: 3.3 }
    ];
    
    await BrowserData.insertMany(browserData);
    
    // Create traffic sources data
    const trafficSources = [
      { name: 'Direct', visitors: 45621, percentage: 36.5 },
      { name: 'Organic Search', visitors: 32547, percentage: 26.1 },
      { name: 'Social Media', visitors: 21458, percentage: 17.2 },
      { name: 'Email', visitors: 12897, percentage: 10.3 },
      { name: 'Referral', visitors: 9874, percentage: 7.9 },
      { name: 'Others', visitors: 2495, percentage: 2.0 }
    ];
    
    await TrafficSource.insertMany(trafficSources);
    
    res.status(200).json({
      success: true,
      message: 'Analytics data seeded successfully',
    });
  } catch (error) {
    next(error);
  }
};
