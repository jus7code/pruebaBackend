// lib/prisma.js
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; // Uso de globalThis en lugar de global

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
