import { LoginForm } from "@/src/components/auth/login-form";
import Link from "next/link";
import { Headline } from "@/src/components/typo/Headline";
import { AuthPattern } from "@/src/components/auth/auth-pattern";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              {/* <Logo /> */}
              <Headline className="mt-2">Welcome Back</Headline>

              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          <LoginForm />

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthPattern
        title={"Welcome back!"}
        subtitle={
          "Sign in to continue your conversations and catch up with your messages."
        }
      />
    </div>
  );
}
