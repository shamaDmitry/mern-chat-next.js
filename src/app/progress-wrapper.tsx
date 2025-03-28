"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ProgressWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setColor("#0f172b");
    } else {
      setColor("#e2e8f0");
    }
  }, [theme]);

  return (
    <ProgressProvider
      height="4px"
      color={color}
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
export default ProgressWrapper;
