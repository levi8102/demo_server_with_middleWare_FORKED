import { findAllUsers, findUserById, createUser } from "../services/user.services.js";
import { Request, Response, NextFunction } from "express";

export async function getAllUsersController(_req: Request, res: Response, next: NextFunction) {
    try {
        const response = await findAllUsers();
        res.json({
            message: 'OK',
            status: 200,
            data: response
        });
    } catch (error) {
        next(error)
    }
}

export async function getUserByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const response = await findUserById(Number(id));
        res.json({
            message: 'OK',
            status: 200,
            data: response
        });
    } catch (error) {
        next(error);
    }
}

export async function createUserController(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await createUser(req.body);
        res.status(201).json({
            data: response
        });
    } catch (error) {
        next(error)
    }
}