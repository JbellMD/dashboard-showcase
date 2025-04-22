"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the type for our growth data
interface GrowthDataPoint {
  month: string;
  users: number;
}

interface UserGrowthChartProps {
  data: GrowthDataPoint[];
}

export function UserGrowthChart({ data }: UserGrowthChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12 }} 
          tickMargin={10}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          tickMargin={10}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip 
          formatter={(value: number) => [value.toLocaleString(), "Users"]}
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="var(--primary)"
          fill="var(--primary)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
