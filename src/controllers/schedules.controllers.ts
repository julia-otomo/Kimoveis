import { Request, Response } from "express";
import {
  IScheduleSuccess,
  TScheduleRequest,
} from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";
import { RealEstate } from "../entities";
import listAllRealEstateSchedulesService from "../services/schedules/listAllRealEstateSchedules.service";

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TScheduleRequest = request.body;
  const userId: number = response.locals.user.id;

  const schedule: IScheduleSuccess = await createScheduleService(
    requestBody,
    userId
  );

  return response.status(201).json(schedule);
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
