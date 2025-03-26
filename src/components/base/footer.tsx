import React from "react";
import { ThemeToggle } from "@/src/components/theme-toggle";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">Footer</div>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};
