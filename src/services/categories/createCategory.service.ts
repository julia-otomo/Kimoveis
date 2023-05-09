import { Repository } from "typeorm";
import {
  TCategoryRequest,
  TCategoryResponse,
} from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoryResponseSchema } from "../../schemas/categories.schemas";

const createCategoryService = async (
  requestBody: TCategoryRequest
): Promise<TCategoryResponse> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newCategory: TCategoryResponse = categoryRepository.create(requestBody);

  await categoryRepository.save(newCategory);

  const validateCategory: TCategoryResponse =
    categoryResponseSchema.parse(newCategory);

  return validateCategory;
};

export default createCategoryService;
