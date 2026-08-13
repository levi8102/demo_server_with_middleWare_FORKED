import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

if (!DB_HOST || !DB_USER || !DB_NAME || !DB_PASSWORD) {
    throw new Error("Database environment variables are missing");
}

const adapter = new PrismaMariaDb({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    allowPublicKeyRetrieval: true
});

export const prisma = new PrismaClient({
    adapter
});

export async function connectToDatabase() {
    try {
        await prisma.$connect();
        console.log("[Database]: Connected Successfully");
    } catch (error) {
        console.error("[Database]: Failed to connect", error);
        process.exit(1);
    }
}