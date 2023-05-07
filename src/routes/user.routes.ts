import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import {
  userRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";
import verifyEmail from "../middlewares/verifyEmail.middleware";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/user.controllers";
import validateToken from "../middlewares/validateToken.middleware";
import {
  verifyUserType,
  verifyUserTypeToUpdateUser,
} from "../middlewares/verifyUserType.middleware";
import verifyIfUserExists from "../middlewares/verifyIfUserExists.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateRequestBody(userRequestSchema),
  verifyEmail,
  createUserController
);

userRouter.use(validateToken);

userRouter.get("", verifyUserType, getAllUsersController);

userRouter.patch(
  "/:id",
  validateRequestBody(userUpdateRequestSchema.partial()),
  verifyIfUserExists,
  verifyUserTypeToUpdateUser,
  verifyEmail,
  updateUserController
);

userRouter.delete(
  "/:id",
  verifyIfUserExists,
  verifyUserType,
  deleteUserController
);

export default userRouter;
