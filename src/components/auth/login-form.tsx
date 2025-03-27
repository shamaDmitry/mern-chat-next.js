import React, { FC } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { loginCredentials } from "@/src/lib/actions/auth";
import { SignInButtons } from "../sign-in-button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  return (
    <div className="space-y-5">
      <form
        action={async (formData) => {
          "use server";

          await loginCredentials(formData);
        }}
        className={cn(className)}
      >
        <div className="space-y-5 mb-5">
          <Input
            placeholder="email"
            name="email"
            defaultValue="zoe.abraham@example.com"
          />

          <Input placeholder="Password" name="password" defaultValue="123456" />
        </div>

        <div className="text-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <SignInButtons />
    </div>
  );
};
