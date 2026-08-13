import { Request, Response, NextFunction } from "express";
import { NotfoundError } from "../utils/errors/app.error.js";

export function notFoundHandler(
    _req: Request,
    _res: Response,
    next: NextFunction
) {
    next(new NotfoundError(" No such Route is there  !!"));
}