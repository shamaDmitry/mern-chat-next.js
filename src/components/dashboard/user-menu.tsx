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
import { logout } from "@/src/lib/actions/auth";
import { Session } from "next-auth";
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const menu = [
  {
    id: uuid(),
    title: "Profile",
    action: (router: AppRouterInstance) => {
      router.push("/profile");
    },
  },
  {
    id: uuid(),
    title: "Settings",
    action: (router: AppRouterInstance) => {
      router.push("/settings");
    },
  },
];

interface UserMenuProps {
  session: Session;
}

export const UserMenu = ({ session }: UserMenuProps) => {
  const router = useRouter();

  if (!session) {
    return null;
  }

  const { user } = session;
  const image = user?.image;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="size-[36px] border">
            {image ? (
              <Image
                className="size-full"
                width={100}
                height={100}
                src={image as string}
                alt={(session?.user?.name as string) || ""}
              />
            ) : (
              <AvatarFallback className="capitalize font-medium">
                {session?.user?.name?.charAt(0) || ""}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>

            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {menu.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => item?.action(router)}
              className="cursor-pointer"
            >
              {item.title}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
