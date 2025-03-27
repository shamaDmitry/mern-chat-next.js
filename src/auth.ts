import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/db";
import User from "./models/user.model";
import { compare } from "bcryptjs";

import { DefaultSession } from "next-auth";

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
          id: user._id,
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
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth;
    // },
    // session: ({ session, token }) => ({
    //   ...session,
    //   user: {
    //     ...session.user,
    //     id: token.id,
    //     fullName: token.fullName,
    //     profilePic: token.profilePic,
    //   },
    // }),
    // jwt: ({ token, user }) => {
    //   if (user) {
    //     return {
    //       ...token,
    //       id: user.id,
    //       fullName: user.fullName,
    //       profilePic: user.profilePic,
    //     };
    //   }
    //   return token;
    // },
  },
});
