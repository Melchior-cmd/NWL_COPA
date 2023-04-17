import { PrismaClient } from "@prisma/client";

// conexão com o banco
export const prisma = new PrismaClient({
  log: ['query'],
});