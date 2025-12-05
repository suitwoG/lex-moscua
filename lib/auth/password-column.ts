import { prisma } from "@/lib/prisma";

let isPasswordColumnReady = false;

export async function ensurePasswordHashColumn() {
  if (isPasswordColumnReady) return;

  try {
    const existing = await prisma.$queryRaw<
      { name: string }[]
    >`SELECT name FROM pragma_table_info('User') WHERE name = 'passwordHash'`;

    if (existing.length === 0) {
      await prisma.$executeRawUnsafe(`ALTER TABLE "User" ADD COLUMN "passwordHash" TEXT`);
    }

    isPasswordColumnReady = true;
  } catch (error) {
    console.error("Failed to ensure passwordHash column:", error);
    throw error;
  }
}
