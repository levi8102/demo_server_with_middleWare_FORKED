import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: 'localhost',
    user: 'root',
    database: 'demo_db',
    password: '1748arijiT#'
});

export const prisma = new PrismaClient({
    adapter
});

export async function connectToDatabase() {
    try {
        await prisma.$connect();
        console.log('[Database]: Connected Successfully');
    } catch (error) {
        console.error('[Database]: Failed to connect', error);
        process.exit(1);
    }
}