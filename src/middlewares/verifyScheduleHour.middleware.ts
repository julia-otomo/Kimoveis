import { NextFunction, Request, Response } from "express";
import AppError from "../error";

const verifyScheduleHour = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const requestHour: string = request.body.hour;

  const convertHour: number = Number(requestHour.slice(0, 2));

  if (convertHour < 8 || convertHour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  return next();
};

export default verifyScheduleHour;
