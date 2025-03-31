import React from "react";
import { SearchInput } from "@/src/components/dashboard/search-input";
import { Button } from "@/src/components/ui/button";
import { Bell } from "lucide-react";
import { UserMenu } from "@/src/components/dashboard/user-menu";
import { ThemeToggle } from "@/src/components/theme-toggle";

export const DashboardControls = () => {
  return (
    <>
      <SearchInput />

      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>

      <UserMenu />

      <ThemeToggle />
    </>
  );
};
