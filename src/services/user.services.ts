import { CreateUserDto } from "../dtos/user.dto.js";
import { findAll, findById, create } from "../repositories/user.repository.js";
import { NotfoundError } from "../utils/errors/app.error.js";

export async function findAllUsers() {
    const users = await findAll();
    return users;
}

export async function findUserById(id: number) {
    const user = await findById(id);
    if(!user) {
        throw new NotfoundError('This id is not exist in db');
    }
    return user;
} 

export async function createUser(data: CreateUserDto) {
    const user = await create(data);
    return user;
}
