import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }
// // eslint-disable-next-line
// export default prisma;

// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }
