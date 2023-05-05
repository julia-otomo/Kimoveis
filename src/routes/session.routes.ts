import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import { userLoginSchema } from "../schemas/user.schemas";
import validateUserLogin from "../middlewares/validateUserLogin.middleware";
import userLoginController from "../controllers/session.controllers";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  validateRequestBody(userLoginSchema),
  validateUserLogin,
  userLoginController
);

export default sessionRouter;
