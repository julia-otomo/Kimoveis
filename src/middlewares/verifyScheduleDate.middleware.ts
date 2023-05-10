import { NextFunction, Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";
import AppError from "../error";

const verifyScheduleDate = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const requestBody: TScheduleRequest = request.body;

  const getDay: number = new Date(requestBody.date).getDay();

  if (getDay === 0 || getDay === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};

export default verifyScheduleDate;
