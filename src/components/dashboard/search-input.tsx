"use client";

import { Loader2, Search } from "lucide-react";
import React from "react";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  isLoading = false,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  className?: string;
}) => {
  return (
    <div className="relative">
      {isLoading ? (
        <Loader2 className="absolute left-2.5 top-2.5 h-4 w-4 animate-spin text-muted-foreground" />
      ) : (
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      )}

      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn("w-[200px] pl-8 md:w-[300px] lg:w-[300px]", className)}
      />
    </div>
  );
};
