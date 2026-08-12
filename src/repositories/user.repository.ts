import { prisma } from "../configs/db.config.js";

export async function findAll() {
    const users = await prisma.user.findMany();
    return users;
}