import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

const verifyEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = request.body.email;

  if (email) {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const userQueryBuilder = userRepo.createQueryBuilder("user");

    await userQueryBuilder.getOne();
  }
};
