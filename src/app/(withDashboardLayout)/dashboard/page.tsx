"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthUser } from "@/lib/auth";
import { TrendingUp, Users, Activity, BarChart3 } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-5 h-5 text-green-600" />,
    label: "Total Revenue",
    value: "$1,250.00",
    description: "Trending up this month",
  },
  {
    icon: <Users className="w-5 h-5 text-red-600" />,
    label: "New Customers",
    value: "1,234",
    description: "Down 20% this period",
  },
  {
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    label: "Active Accounts",
    value: "45,678",
    description: "Strong user retention",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
    label: "Growth Rate",
    value: "4.5%",
    description: "Steady performance increase",
  },
];

export default async function DashboardPage() {
  const user = await getAuthUser();
  console.log(user);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
