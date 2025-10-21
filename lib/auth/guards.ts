import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth/options";

export async function requireAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return null;
  }
  return session;
}

export function forbiddenResponse() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
