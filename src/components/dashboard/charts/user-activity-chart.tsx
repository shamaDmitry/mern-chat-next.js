"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/src/components/ui/chart";

import { userActivityData } from "@/src/components/dashboard/dummyData";

export const UserActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={userActivityData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="active" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
