import { Router } from "express";
import { getAllUsersController, getUserByIdController, createUserController } from "../controllers/user.controller.js";
import { validateRequestBody } from "../middlewares/validation.middleware.js";
import { createUserSchema } from "../dtos/user.dto.js";

export const userRouter = Router();

userRouter.get('/', getAllUsersController);

userRouter.get('/:id', getUserByIdController);

userRouter.post('/', validateRequestBody(createUserSchema), createUserController);