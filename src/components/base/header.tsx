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
                        alt={session.user.name as string}
                      />
                    ) : (
                      <AvatarFallback>{session.user.name}</AvatarFallback>
                    )}
                  </Avatar>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{session.user.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <SignOutButton />
          </div>
        )}

        {!session?.user && (
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
