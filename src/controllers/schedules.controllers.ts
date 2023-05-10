import { Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";
import { RealEstate } from "../entities";
import listAllRealEstateSchedulesService from "../services/schedules/listAllRealEstateSchedules.service";

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TScheduleRequest = request.body;
  const userId: number = response.locals.user.id;

  await createScheduleService(requestBody, userId);

  return response.status(201).json({ message: "Schedule created" });
};

const listAllRealEstateSchedulesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateId: number = Number(request.params.id);

  const listRealEstate: RealEstate = await listAllRealEstateSchedulesService(
    realEstateId
  );

  return response.json(listRealEstate);
};

export { createScheduleController, listAllRealEstateSchedulesController };
