import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors/app.error.js";

export function appErrorHandler(
    err: AppError,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message,
        data: {},
        error: err
    });
}