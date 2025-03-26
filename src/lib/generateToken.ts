"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const generateToken = async (userId: string) => {
  const cookieStore = await cookies();

  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  cookieStore.set({
    name: "jwt",
    value: token,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
