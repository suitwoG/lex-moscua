import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "ADMIN" | "AUTHOR" | "LEARNER";
    } & DefaultSession["user"];
  }

  interface User {
    role: "ADMIN" | "AUTHOR" | "LEARNER";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "AUTHOR" | "LEARNER";
    id?: string;
  }
}
