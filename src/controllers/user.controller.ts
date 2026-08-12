import { findAllUsers } from "../services/user.services.js";
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
        next(error);
    }
}