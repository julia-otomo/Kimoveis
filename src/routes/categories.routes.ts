import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import { categoryRequestSchema } from "../schemas/categories.schemas";
import verifyCategoryName from "../middlewares/verifyCategoryName.middleware";
import { verifyUserType } from "../middlewares/verifyUserType.middleware";
import {
  createCategoryController,
  listAllCategoriesController,
  listAllPropertiesByCategoryController,
} from "../controllers/categories.controllers";
import validateToken from "../middlewares/validateToken.middleware";
import verifyCategoryId from "../middlewares/verifyCategoryId.middleware";

const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  validateToken,
  validateRequestBody(categoryRequestSchema),
  verifyUserType,
  verifyCategoryName,
  createCategoryController
);

categoriesRouter.get("", listAllCategoriesController);

categoriesRouter.get(
  "/:id/realEstate",
  verifyCategoryId,
  listAllPropertiesByCategoryController
);

export default categoriesRouter;
