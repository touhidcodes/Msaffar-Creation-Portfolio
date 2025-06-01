import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD!,
    10
  );
  const seeAdmin = await prisma.user.upsert({
    where: { email: process.env.NEXT_PUBLIC_ADMIN_EMAIL },
    update: {},
    create: {
      email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      username: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
      password,
    },
  });
  console.log(seeAdmin);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
