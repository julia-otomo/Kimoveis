import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";
import { compareSync, hashSync } from "bcryptjs";
import { TUser } from "../interfaces/user.interfaces";

const validateUserLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: string = request.body.email;
  const userPassword: string = request.body.password;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: TUser | null = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const hashPassword = hashSync(findUser.password, 10);

  const validPassword: boolean = compareSync(userPassword, hashPassword);

  if (!validPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  return next();
};

export default validateUserLogin;
