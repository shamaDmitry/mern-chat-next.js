import Link from "next/link";
import { auth } from "@/src/auth";
import { SignOutButton } from "@/src/components/sign-out-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default async function Home() {
  const session = await auth();

  console.log("session", session);

  return (
    <div className="container mx-auto py-5">
      <div className="flex gap-2 flex-wrap justify-between items-start">
        <Link href="/" className="border py-2 px-4 capitalize">
          LANDING
        </Link>

        <div className="flex gap-2">
          {!session?.user && <Link href="/login">Login</Link>}

          {session?.user && (
            <div className="flex gap-5 items-center">
              <Avatar className="size-[36px] border">
                <AvatarImage src={session.user.image ?? ""} alt="@shadcn" />
                <AvatarFallback>{session.user.name}</AvatarFallback>
              </Avatar>

              <SignOutButton />
            </div>
          )}
        </div>
      </div>

      {!session && <h1 className="text-2xl mb-5 text-center">Login first</h1>}

      {session && (
        <h1 className="text-2xl mb-5 text-center">Hi {session?.user?.name}</h1>
      )}
    </div>
  );
}
