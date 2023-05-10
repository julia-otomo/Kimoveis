import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import AppError from "../error";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";

const checkAvailabilityToVisitAProperty = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const requestBody: TScheduleRequest = request.body;

  const { date, hour, realEstateId } = requestBody;

  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedule: Schedule | null = await schedulesRepository
    .createQueryBuilder("schedules")
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .andWhere("schedules.date = :scheduleDate", { scheduleDate: date })
    .andWhere("schedules.hour = :scheduleHour", { scheduleHour: hour })
    .getOne();

  if (schedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export default checkAvailabilityToVisitAProperty;
