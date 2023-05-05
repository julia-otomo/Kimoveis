import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";

const verifyEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: string = request.body.email;

  if (userEmail) {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const findEmail: boolean = await userRepo.exist({
      where: {
        email: userEmail,
      },
    });

    if (findEmail) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
};

export default verifyEmail;
