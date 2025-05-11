import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function seeAdmin() {
  const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const username = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const password = await bcrypt.hash(
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD!,
    10
  );

  const existing = await prisma.user.findUnique({ where: { email } });

  if (!existing) {
    await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    console.log("✅ Seeded default user");
  } else {
    console.log("⚠️  User already exists");
  }
}

seeAdmin()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
