import { DevicesChart } from "@/src/components/dashboard/charts/devices-chart";
import { RevenueChart } from "@/src/components/dashboard/charts/revenue-chart";
import { UserActivityChart } from "@/src/components/dashboard/charts/user-activity-chart";
import { Headline } from "@/src/components/typo/Headline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import { CreditCard, LineChart, Users } from "lucide-react";
// import { UAParser } from "ua-parser-js";
// import { headers } from "next/headers";

export default async function DashboardPage() {
  // const headersList = await headers();
  // const userAgent = headersList.get("user-agent") || "";

  // const { browser, cpu, device } = UAParser(userAgent);

  return (
    <div>
      <Headline className="mb-5">DashboardPage</Headline>

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +10.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-muted-foreground">
                +1.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <Card className="">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>

            <CardContent className="pl-2">
              <RevenueChart />
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>User Activity</CardTitle>

              <CardDescription>
                Daily active users over the week
              </CardDescription>
            </CardHeader>

            <CardContent>
              <UserActivityChart />
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>Device Distribution</CardTitle>

              <CardDescription>User device breakdown</CardDescription>
            </CardHeader>

            <CardContent>
              <DevicesChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
