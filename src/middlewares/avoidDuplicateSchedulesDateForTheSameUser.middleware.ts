import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { AppDataSource } from "../data-source";
import {
  TScheduleRequest,
  TScheduleResponse,
} from "../interfaces/schedules.interfaces";
import AppError from "../error";

const avoidDuplicateSchedulesDateForTheSameUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userResponseId: number = response.locals.user.id;
  const requestBody: TScheduleRequest = request.body;

  const { date, hour } = requestBody;

  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedule: Schedule | null = await schedulesRepository
    .createQueryBuilder("schedules")
    .where("schedules.userId = :userId", { userId: userResponseId })
    .andWhere("schedules.date = :scheduleDate", { scheduleDate: date })
    .andWhere("schedules.hour = :scheduleHour", { scheduleHour: hour })
    .getOne();

  if (schedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export default avoidDuplicateSchedulesDateForTheSameUser;
