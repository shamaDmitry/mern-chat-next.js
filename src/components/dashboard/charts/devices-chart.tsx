"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "@/src/components/ui/chart";
import { generateColors } from "@/src/components/dashboard/dummyData";
import { useEffect, useState } from "react";
import { OsChartData } from "@/src/types";

export default function DevicesChart() {
  const [colors, setColors] = useState<string[]>([]);

  const [chartData, setChartData] = useState<OsChartData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/stats");
      const data = await res.json();

      console.log(generateColors(data.data.length));

      setChartData(data.data);
      setColors(generateColors(data.data.length) as string[]);
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
          labelLine={true}
          label={(props) => {
            const { percent } = props;

            return `${(percent * 100).toFixed(0)}%`;
          }}
          outerRadius={80}
          dataKey="count"
        >
          {chartData.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={colors[index]} />;
          })}
        </Pie>

        <Tooltip />

        <Legend
          payload={chartData.map((entry, index) => {
            return {
              value: entry.name,
              type: "circle",
              color: colors[index],
              id: entry.name,
            };
          })}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
