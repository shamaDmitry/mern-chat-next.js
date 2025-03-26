"use client";

import { logout } from "@/src/lib/actions/auth";
import { Button } from "./ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => logout()}> Sign out</Button>;
};
