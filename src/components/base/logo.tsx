import { BarChart3 } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface LogoProps {
  isCompact?: boolean;
  href?: string;
}

export const Logo: FC<LogoProps> = ({ isCompact = false, href = "/" }) => {
  return (
    <Link href={href} className="flex items-center gap-2 font-bold">
      <BarChart3 className="h-6 w-6" />

      {!isCompact && <span>AnalyticsPro</span>}
    </Link>
  );
};
