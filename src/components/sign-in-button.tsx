"use client";

import { loginGithub, loginGoogle } from "@/src/lib/actions/auth";
import { Button } from "@/src/components/ui/button";

export const SignInButtons = () => {
  return (
    <div className="flex flex-col gap-3">
      <Button onClick={() => loginGithub()}> Sign In With Github</Button>
      <Button onClick={() => loginGoogle()}> Sign In With Google</Button>
    </div>
  );
};
