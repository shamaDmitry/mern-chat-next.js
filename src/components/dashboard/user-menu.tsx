"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";

import { v4 as uuid } from "uuid";
import { SyntheticEvent } from "react";
import { logout } from "@/src/lib/actions/auth";

const menu = [
  {
    id: uuid(),
    title: "Profile",
    action: (event: SyntheticEvent) => {
      console.log("event", event);
    },
  },
  {
    id: uuid(),
    title: "Settings",
    action: (event: SyntheticEvent) => {
      console.log("event", event);
    },
  },
];

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full ">
          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            JD
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john@example.com
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {menu.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={item?.action}
              className="cursor-pointer"
            >
              {item.title}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => logout()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
