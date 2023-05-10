import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.midleware";
import { schedulesRequestSchema } from "../schemas/schedules.schemas";
import validateToken from "../middlewares/validateToken.middleware";
import avoidDuplicateSchedulesDateForTheSameUser from "../middlewares/avoidDuplicateSchedulesDateForTheSameUser.middleware";
import checkAvailabilityToVisitAProperty from "../middlewares/checkAvailabilityToVisitAProperty.middleware";
import verifyScheduleDate from "../middlewares/verifyScheduleDate.middleware";
import verifyScheduleHour from "../middlewares/verifyScheduleHour.middleware";
import verifyRealEstateId from "../middlewares/verifyRealEstateId.middleware";
import {
  createScheduleController,
  listAllRealEstateSchedulesController,
} from "../controllers/schedules.controllers";
import { verifyUserType } from "../middlewares/verifyUserType.middleware";

const schedulesRouter: Router = Router();

schedulesRouter.use(validateToken);

schedulesRouter.post(
  "",
  validateRequestBody(schedulesRequestSchema),
  verifyRealEstateId,
  verifyScheduleDate,
  verifyScheduleHour,
  avoidDuplicateSchedulesDateForTheSameUser,
  checkAvailabilityToVisitAProperty,
  createScheduleController
);

schedulesRouter.get(
  "/realEstate/:id",
  verifyUserType,
  verifyRealEstateId,
  listAllRealEstateSchedulesController
);

export default schedulesRouter;
