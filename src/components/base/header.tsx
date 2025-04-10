import { auth } from "@/src/auth";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { SignOutButton } from "@/src/components/sign-out-button";
import { Button } from "@/src/components/ui/button";
import { Logo } from "@/src/components/base/logo";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

import { v4 as uuid } from "uuid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const menuItems = [
  {
    id: uuid(),
    title: "Features",
    href: "#features",
    isProtected: false,
  },
  {
    id: uuid(),
    title: "Testimonials",
    href: "#testimonials",
    isProtected: false,
  },
  {
    id: uuid(),
    title: "Pricing",
    href: "#pricing",
    isProtected: false,
  },
  {
    id: uuid(),
    title: "Faq",
    href: "#faq",
    isProtected: false,
  },
  {
    id: uuid(),
    title: "dashboard",
    href: "dashboard",
    isProtected: true,
  },
];

export const Header = async () => {
  const session = await auth();
  const image = session?.user?.image;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => {
            if (item.isProtected && !session?.user) {
              return null;
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary capitalize"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto md:hidden mr-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="flex ">
                <MenuIcon className="h-[1.2rem] w-[1.2rem] transition-all" />

                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align={"end"}>
              {menuItems.map((item) => {
                if (item.isProtected && !session?.user) {
                  return null;
                }

                return (
                  <DropdownMenuItem asChild key={item.id}>
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary capitalize cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                );
              })}

              {!session?.user && (
                <>
                  <DropdownMenuItem>
                    <Button asChild variant={"outline"} className="w-full">
                      <Link href="/login">Login</Link>
                    </Button>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Button asChild variant={"default"}>
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </DropdownMenuItem>
                </>
              )}

              {session?.user && (
                <>
                  <DropdownMenuItem asChild>
                    <SignOutButton className="w-full mt-4" size="sm" />
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {session?.user && (
          <div className="flex gap-5 items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
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
                      <AvatarFallback>
                        {session?.user?.name || ""}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{session.user.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <SignOutButton className="hidden md:flex" />
          </div>
        )}

        {!session?.user && (
          <div className="items-center gap-4 hidden md:flex">
            <Button asChild variant={"outline"}>
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Log in
              </Link>
            </Button>

            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
