import { PrismaClient } from "@prisma/client";
import { parsedEnv } from "../../config/environment";



/**
 * Prisma client instance. Used to prevent multiple unwanted connections to the database. Use this to interact with the database.
 */
export const db = globalThis.prisma || new PrismaClient();

if (parsedEnv.NODE_ENV !== "production") globalThis.prisma = db;
