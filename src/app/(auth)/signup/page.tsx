import Link from "next/link";
import { Headline } from "@/src/components/typo/Headline";
import { AuthPattern } from "@/src/components/auth/auth-pattern";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              {/* <Logo /> */}

              <Headline className="mt-2">Create Account</Headline>

              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* <RegisterForm /> */}

          <div className="text-center">
            <p className="text-base-content/60 flex gap-2 flex-wrap">
              <span>Already have an account?</span>
              <Link href="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthPattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
}
