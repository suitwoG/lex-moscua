import { NextResponse } from "next/server";

import { forbiddenResponse, requireAdminSession } from "@/lib/auth/guards";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return forbiddenResponse();
  }

  return NextResponse.json({
    ok: true,
    user: {
      id: session.user.id,
      role: session.user.role,
    },
  });
}

export async function POST() {
  const session = await requireAdminSession();
  if (!session) {
    return forbiddenResponse();
  }

  return NextResponse.json({ ok: true });
}
