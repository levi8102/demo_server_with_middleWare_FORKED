import { ZodTypeAny } from "zod";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../utils/errors/app.error.js";

export const validateRequestBody = (schema: ZodTypeAny) => async (req: Request, _res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        throw new BadRequestError('Something went wrong');
    }
}


export const validateRequestParams =
    (schema: ZodTypeAny) =>
    async (req: Request, _res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.params);
            next();
        } catch (error) {
            throw new BadRequestError("Something went wrong");
        }
    };


  export const validateRequestQuery =
    (schema: ZodTypeAny) =>
    async (req: Request, _res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.query);
            next();
        } catch (error) {
            throw new BadRequestError("Something went wrong");
        }
    };