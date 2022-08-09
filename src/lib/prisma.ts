import { PrismaClient } from "@prisma/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient
//     }
//   }
// }

const prisma = new PrismaClient();

export default prisma;