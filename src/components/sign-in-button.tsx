"use client";

import { login } from "@/src/lib/actions/auth";
import { Button } from "@/src/components/ui/button";

export const SignInButton = () => {
  return <Button onClick={() => login()}> Sign In With Github</Button>;
};
