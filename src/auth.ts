import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/db";
import User from "./models/user.model";
import { compare } from "bcryptjs";
import { DefaultSession } from "next-auth";
import { saveUserStats } from "./lib/actions/user-stats";
import { headers } from "next/headers";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      fullName: string;
      profilePic: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new CredentialsSignin("Missing credentials");
        }
        await connectDB();

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid credentials");
        }

        if (!user.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await compare(
          password as string,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        const userData = {
          name: user.fullName,
          email: user.email,
          image: user.profilePic,
        };

        return userData;
      },
    }),
    GitHub,
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;

        const headersList = await headers();
        const userAgent = headersList.get("user-agent") || "";

        await saveUserStats(userAgent);
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
});
