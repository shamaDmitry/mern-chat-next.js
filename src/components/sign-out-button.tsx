"use client";

import { logout } from "@/src/lib/actions/auth";
import { Button } from "./ui/button";

export const SignOutButton = ({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "sm" | "lg";
}) => {
  return (
    <Button onClick={() => logout()} className={className} size={size}>
      Sign out
    </Button>
  );
};
