"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "@/src/components/ui/chart";
import { COLORS } from "../dummyData";
import { useEffect, useState } from "react";

export const DevicesChart = () => {
  const [chartData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/stats");
      console.log("res", res);
    };

    getData();
    return () => {};
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) => {
            const { name, percent } = props;

            return `${name}: ${(percent * 100).toFixed(0)}%`;
          }}
          outerRadius={100}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
