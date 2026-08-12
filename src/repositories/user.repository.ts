import { prisma } from "../configs/db.config.js";

export async function findAll() {
    const users = await prisma.user.findMany();
    return users;
}

export async function findById(_id: number) {
    // should be implemented
} 