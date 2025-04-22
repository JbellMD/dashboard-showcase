"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data - in a real app, this would come from an API
const generateData = () => {
  const data = [];
  const currentDate = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      activeUsers: Math.floor(Math.random() * 1000) + 5000,
      newUsers: Math.floor(Math.random() * 300) + 200,
    });
  }
  
  return data;
};

export function PerformanceChart() {
  const data = generateData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
        <XAxis 
          dataKey="date" 
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
          formatter={(value) => [`${value.toLocaleString()}`, "Users"]}
          labelFormatter={(label) => `Date: ${label}`}
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="activeUsers" 
          stroke="var(--primary)" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
          name="Active Users"
        />
        <Line 
          type="monotone" 
          dataKey="newUsers" 
          stroke="#10b981" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
          name="New Users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
