import { auth } from "@/src/auth";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { SignOutButton } from "@/src/components/sign-out-button";
import { Button } from "@/src/components/ui/button";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <BarChart3 className="h-6 w-6" />
          <span>AnalyticsPro</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </Link>
        </nav>

        {session?.user && (
          <div className="flex gap-5 items-center">
            <Avatar className="size-[36px] border">
              <AvatarImage src={session.user.image ?? ""} alt="@shadcn" />
              <AvatarFallback>{session.user.name}</AvatarFallback>
            </Avatar>

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
