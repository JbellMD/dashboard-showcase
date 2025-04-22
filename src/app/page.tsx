import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, ArrowUpRight, ArrowDownRight, DollarSign, Activity } from "lucide-react";

// This is a Server Component - demonstrating RSC capabilities
export default function Home() {
  // These would typically come from an API or database
  const analytics = {
    totalUsers: 12942,
    userGrowth: 12.5,
    revenue: 24765.89,
    revenueGrowth: -2.4,
    activeUsers: 8761,
    activeGrowth: 8.1,
    conversion: 3.2
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: April 22, 2025
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <AnalyticsCard 
                title="Total Users"
                value={analytics.totalUsers.toLocaleString()}
                description={`${analytics.userGrowth}% from last month`}
                icon={<Users className="h-4 w-4" />}
                trend="up"
                trendValue={analytics.userGrowth}
              />
              <AnalyticsCard 
                title="Revenue"
                value={`$${analytics.revenue.toLocaleString()}`}
                description={`${Math.abs(analytics.revenueGrowth)}% from last month`}
                icon={<DollarSign className="h-4 w-4" />}
                trend="down"
                trendValue={analytics.revenueGrowth}
              />
              <AnalyticsCard 
                title="Active Users"
                value={analytics.activeUsers.toLocaleString()}
                description={`${analytics.activeGrowth}% from last month`}
                icon={<Activity className="h-4 w-4" />}
                trend="up"
                trendValue={analytics.activeGrowth}
              />
              <AnalyticsCard 
                title="Conversion Rate"
                value={`${analytics.conversion}%`}
                description="Of total visitors"
                icon={<BarChart3 className="h-4 w-4" />}
                trend="neutral"
                trendValue={0}
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>
                    Daily user activity for the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PerformanceChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>User Breakdown</CardTitle>
                  <CardDescription>
                    Distribution by platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PlatformDistribution />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Detailed metrics and user behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  More detailed analytics would appear here in a real application.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Report Generation</CardTitle>
                <CardDescription>
                  Create custom reports from your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Report generation tools would appear here in a real application.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

// Client components for interactive elements
function AnalyticsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend,
  trendValue 
}: { 
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
  trendValue: number;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {trend === 'up' && (
            <span className="text-green-500 inline-flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              {description}
            </span>
          )}
          {trend === 'down' && (
            <span className="text-red-500 inline-flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              {description}
            </span>
          )}
          {trend === 'neutral' && (
            <span className="text-muted-foreground inline-flex items-center">
              {description}
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

// These would be client components with 'use client' directive in real application
function PerformanceChart() {
  return (
    <div className="h-[240px] flex items-center justify-center bg-muted/30 rounded-md">
      <p className="text-sm text-muted-foreground">Interactive chart would render here using Recharts</p>
    </div>
  );
}

function PlatformDistribution() {
  return (
    <div className="h-[240px] flex items-center justify-center bg-muted/30 rounded-md">
      <p className="text-sm text-muted-foreground">Pie chart showing distribution would render here</p>
    </div>
  );
}
