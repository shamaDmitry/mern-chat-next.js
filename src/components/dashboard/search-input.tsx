import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/src/components/ui/input";

export const SearchInput = () => {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

      <Input
        type="search"
        placeholder="Search..."
        className="w-[200px] pl-8 md:w-[300px] lg:w-[300px]"
      />
    </div>
  );
};
