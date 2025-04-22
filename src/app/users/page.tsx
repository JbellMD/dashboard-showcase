import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserData } from "@/lib/data";
import { UsersTable } from "@/components/tables/users-table";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";

// This is a Server Component - showcasing server data fetching
export default async function UsersPage() {
  // Fetch data on the server
  const userData = await getUserData();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: April 22, 2025
            </p>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.userStats.total.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.userStats.active.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((userData.userStats.active / userData.userStats.total) * 100)}% of total users
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">New Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.userStats.newToday.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.userStats.retention}%</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly active users over the past year</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <UserGrowthChart data={userData.userGrowth} />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Users by Location</CardTitle>
              <CardDescription>Top countries by user count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.usersByCountry.map((country) => (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{country.country}</p>
                      <p className="text-xs text-muted-foreground">
                        {country.users.toLocaleString()} users
                      </p>
                    </div>
                    <div className="font-medium">{country.percentage}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
            <CardDescription>A list of all active users in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <UsersTable users={userData.activeUsers} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
