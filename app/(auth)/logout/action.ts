"use server";

import { signOut } from "next-auth";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await signOut({ redirect: false });
  redirect("/login");
}
