import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { TCategoryResponse } from "../interfaces/categories.interfaces";
import AppError from "../error";

const verifyCategoryName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const requestName: string = request.body.name;

  if (requestName) {
    const categoriesRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

    const findCategory: TCategoryResponse | null =
      await categoriesRepository.findOne({
        where: {
          name: requestName,
        },
      });

    if (findCategory) {
      throw new AppError("Category already exists", 409);
    }
  }

  next();
};

export default verifyCategoryName;
