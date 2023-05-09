import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import { realEstateRequestSchema } from "../schemas/realEstate.schemas";
import { verifyUserType } from "../middlewares/verifyUserType.middleware";
import verifyAddress from "../middlewares/verifyAddress.middleware";
import {
  createRealEstateController,
  listAllRealEstatesController,
} from "../controllers/realEstate.controllers";
import validateToken from "../middlewares/validateToken.middleware";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validateRequestBody(realEstateRequestSchema),
  validateToken,
  verifyUserType,
  verifyAddress,
  createRealEstateController
);

realEstateRouter.get("", listAllRealEstatesController);

export default realEstateRouter;
