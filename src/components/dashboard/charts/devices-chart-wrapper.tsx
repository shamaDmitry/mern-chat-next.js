"use client";

import dynamic from "next/dynamic";
import { JSX } from "react";

const DevicesChart = dynamic<() => JSX.Element>(
  () => import("@/src/components/dashboard/charts/devices-chart"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-[300px] flex flex-col items-center justify-center gap-2">
        <div className="rounded-full size-52 bg-gray-300 shrink-0" />
        <div className="h-4 w-52 bg-gray-300 rounded" />
        <div className="h-4 w-32 bg-gray-300 rounded" />
      </div>
    ),
  }
) as React.ComponentType;

export const DevicesChartWrapper = () => {
  return <DevicesChart />;
};
