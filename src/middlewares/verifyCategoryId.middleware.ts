import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { TCategoryResponse } from "../interfaces/categories.interfaces";
import AppError from "../error";

const verifyCategoryId = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const categoryid: number = Number(request.params.id);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: TCategoryResponse | null =
    await categoryRepository.findOne({
      where: {
        id: categoryid,
      },
    });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  next();
};

export default verifyCategoryId;
