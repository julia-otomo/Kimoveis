import { NextFunction, Request, Response } from "express";
import AppError from "../error";

const verifyUserType = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userAdminStatus: boolean = response.locals.user.admin;

  if (!userAdminStatus) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};

const verifyUserTypeToUpdateAndDeleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const responseUserAdmin: boolean = response.locals.user.admin;
  const reponseUserId: number = Number(response.locals.user.id);
  const requestUserId: number = Number(request.params.id);

  if (reponseUserId !== requestUserId && !responseUserAdmin) {
    throw new AppError("Insufficient Permission", 403);
  }

  next();
};

export { verifyUserType, verifyUserTypeToUpdateAndDeleteUser };
