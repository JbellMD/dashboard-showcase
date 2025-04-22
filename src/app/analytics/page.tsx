import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAnalyticsData } from "@/lib/data";

// This is a Server Component - it runs on the server during build time or on request
export default async function AnalyticsPage() {
  // Server-side data fetching - this would be an actual API call in a real app
  const data = await getAnalyticsData();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: April 22, 2025
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="overview">Traffic Overview</TabsTrigger>
            <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.trafficOverview.map((metric) => (
                <Card key={metric.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {metric.change > 0 ? (
                        <span className="text-green-500">↑ {metric.change}% from last period</span>
                      ) : metric.change < 0 ? (
                        <span className="text-red-500">↓ {Math.abs(metric.change)}% from last period</span>
                      ) : (
                        <span>No change from last period</span>
                      )}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Traffic Over Time</CardTitle>
                <CardDescription>Daily visitors for the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px] pt-4">
                {/* This would be a chart component in a real app */}
                <div className="h-full w-full rounded-md bg-muted/30 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Server-side rendered data for traffic over time would be visualized here
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                  <CardDescription>Average time spent by page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.engagementMetrics.map((metric) => (
                      <div key={metric.page} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">{metric.page}</p>
                          <p className="text-xs text-muted-foreground">
                            {metric.visitors.toLocaleString()} visitors
                          </p>
                        </div>
                        <div className="font-medium">{metric.timeSpent}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Browser Statistics</CardTitle>
                  <CardDescription>Distribution by browser</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.browserStats.map((stat) => (
                      <div key={stat.name} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">{stat.name}</p>
                        </div>
                        <div className="font-medium">{stat.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your users are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.trafficSources.map((source) => (
                    <div key={source.name} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{source.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {source.visitors.toLocaleString()} visitors
                        </p>
                      </div>
                      <div className="font-medium">{source.percentage}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
