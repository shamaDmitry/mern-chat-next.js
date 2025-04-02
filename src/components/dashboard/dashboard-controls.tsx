"use client";

import { SearchInput } from "@/src/components/dashboard/search-input";
import { Button } from "@/src/components/ui/button";
import { Bell } from "lucide-react";
import { UserMenu } from "@/src/components/dashboard/user-menu";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { Session } from "next-auth";

interface DashboardControlsProps {
  session: Session;
}

export const DashboardControls = ({ session }: DashboardControlsProps) => {
  return (
    <>
      <SearchInput value="" onChange={() => {}} />

      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>

      <UserMenu session={session} />

      <ThemeToggle />
    </>
  );
};
