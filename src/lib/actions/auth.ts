"use server";

import { signIn, signOut } from "@/src/auth";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

export const loginGithub = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const loginGoogle = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const loginCredentials = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;

    return someError.cause;
  }

  redirect("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
