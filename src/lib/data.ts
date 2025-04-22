// This file would typically contain functions for fetching data from APIs
// Here we're using simulated data for demonstration purposes

// Simulate async data fetching with artificial delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getAnalyticsData() {
  // Simulate network delay
  await delay(500);
  
  return {
    trafficOverview: [
      { id: 1, name: 'Total Visitors', value: '124,892', change: 12.5 },
      { id: 2, name: 'Unique Visitors', value: '89,647', change: 8.2 },
      { id: 3, name: 'Page Views', value: '487,123', change: -2.1 },
      { id: 4, name: 'Bounce Rate', value: '32.4%', change: -5.7 },
      { id: 5, name: 'Avg. Session', value: '4m 23s', change: 1.8 },
      { id: 6, name: 'Conversion Rate', value: '3.2%', change: 0.5 },
    ],
    engagementMetrics: [
      { page: 'Home Page', visitors: 42891, timeSpent: '2m 37s' },
      { page: 'Product Listing', visitors: 31254, timeSpent: '4m 12s' },
      { page: 'Blog Articles', visitors: 18932, timeSpent: '5m 49s' },
      { page: 'About Us', visitors: 7892, timeSpent: '1m 15s' },
      { page: 'Contact Page', visitors: 5621, timeSpent: '2m 02s' },
    ],
    browserStats: [
      { name: 'Chrome', percentage: 64.5 },
      { name: 'Safari', percentage: 18.2 },
      { name: 'Firefox', percentage: 7.8 },
      { name: 'Edge', percentage: 6.2 },
      { name: 'Others', percentage: 3.3 },
    ],
    trafficSources: [
      { name: 'Direct', visitors: 45621, percentage: 36.5 },
      { name: 'Organic Search', visitors: 32547, percentage: 26.1 },
      { name: 'Social Media', visitors: 21458, percentage: 17.2 },
      { name: 'Email', visitors: 12897, percentage: 10.3 },
      { name: 'Referral', visitors: 9874, percentage: 7.9 },
      { name: 'Others', visitors: 2495, percentage: 2.0 },
    ],
  };
}

export async function getUserData() {
  // Simulate network delay
  await delay(300);
  
  return {
    activeUsers: [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', lastActive: 'Just now', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', lastActive: '5 min ago', role: 'User' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', lastActive: '3 days ago', role: 'User' },
      { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'active', lastActive: '1 hour ago', role: 'Editor' },
      { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'active', lastActive: '30 min ago', role: 'User' },
      { id: 6, name: 'Sarah Lee', email: 'sarah@example.com', status: 'active', lastActive: '15 min ago', role: 'User' },
      { id: 7, name: 'James Wilson', email: 'james@example.com', status: 'inactive', lastActive: '1 week ago', role: 'User' },
      { id: 8, name: 'Emily Davis', email: 'emily@example.com', status: 'active', lastActive: '2 hours ago', role: 'Editor' },
      { id: 9, name: 'Michael Miller', email: 'michael@example.com', status: 'active', lastActive: '45 min ago', role: 'User' },
      { id: 10, name: 'Jessica Taylor', email: 'jessica@example.com', status: 'active', lastActive: 'Just now', role: 'Admin' },
    ],
    userGrowth: [
      { month: 'Jan', users: 2500 },
      { month: 'Feb', users: 3200 },
      { month: 'Mar', users: 4100 },
      { month: 'Apr', users: 4900 },
      { month: 'May', users: 5600 },
      { month: 'Jun', users: 6300 },
      { month: 'Jul', users: 7100 },
      { month: 'Aug', users: 7800 },
      { month: 'Sep', users: 8400 },
      { month: 'Oct', users: 9200 },
      { month: 'Nov', users: 10100 },
      { month: 'Dec', users: 11000 },
    ],
    userStats: {
      total: 11000,
      active: 8742,
      newToday: 142,
      premium: 2354,
      retention: 76.5,
    },
    usersByCountry: [
      { country: 'United States', users: 4200, percentage: 38.2 },
      { country: 'United Kingdom', users: 1850, percentage: 16.8 },
      { country: 'Germany', users: 1250, percentage: 11.4 },
      { country: 'France', users: 950, percentage: 8.6 },
      { country: 'Canada', users: 830, percentage: 7.5 },
      { country: 'Australia', users: 720, percentage: 6.5 },
      { country: 'Japan', users: 580, percentage: 5.3 },
      { country: 'Others', users: 620, percentage: 5.7 },
    ],
  };
}
