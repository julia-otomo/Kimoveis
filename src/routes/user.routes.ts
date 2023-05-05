import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import { userRequestSchema } from "../schemas/user.schemas";
import verifyEmail from "../middlewares/verifyEmail.middleware";
import {
  createUserController,
  getAllUsersController,
} from "../controllers/user.controllers";
import validateToken from "../middlewares/validateToken.middleware";
import { verifyUserType } from "../middlewares/verifyUserType.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateRequestBody(userRequestSchema),
  verifyEmail,
  createUserController
);

userRouter.use(validateToken);

userRouter.get("", verifyUserType, getAllUsersController);

export default userRouter;
