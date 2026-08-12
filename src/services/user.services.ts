import { findAll } from "../repositories/user.repository.js";

export async function findAllUsers() {
    const users = await findAll();
    return users;
}