import { Router } from "express";
import { getAllUsersController, getUserByIdController, createUserController } from "../controllers/user.controller.js";
import {
    validateRequestBody,
    validateRequestParams,
    validateRequestQuery
} from "../middlewares/validation.middleware.js";

import {
    createUserSchema,
    getUserByIdParamsSchema,
    getUsersQuerySchema
} from "../dtos/user.dto.js";
export const userRouter = Router();

userRouter.get(
    '/',
    validateRequestQuery(getUsersQuerySchema),
    getAllUsersController
);

userRouter.get(
    '/:id',
    validateRequestParams(getUserByIdParamsSchema),
    getUserByIdController
);

userRouter.post('/', validateRequestBody(createUserSchema), createUserController);