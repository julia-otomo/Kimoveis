import { NextFunction, Request, Response } from "express";
import { TUser } from "../interfaces/user.interfaces";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";

const verifyIfUserExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = Number(request.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: TUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default verifyIfUserExists;
