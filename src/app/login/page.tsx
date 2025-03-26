"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
      <button onClick={() => signIn("github")}>Login with GitHub</button>
    </div>
  );
}
