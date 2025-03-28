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
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },

    // signIn: async ({ user, account }) => {
    //   console.log("user, account", { user, account });

    //   if (account?.provider === "google") {
    //     try {
    //       const { email, name, image, id } = user;

    //       await connectDB();

    //       const existingUser = await User.findOne({ email });

    //       console.log("existingUser", existingUser);

    //       if (!existingUser) {
    //         await User.create({
    //           email,
    //           fullName: name,
    //           profilePic: image,
    //           authProvider: id,
    //           password: "123456",
    //         });
    //       }

    //       return true;
    //     } catch (error) {
    //       console.log("error", error);

    //       throw new Error("Error creating user");
    //     }
    //   }

    //   if (account?.provider === "credentials") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
});
