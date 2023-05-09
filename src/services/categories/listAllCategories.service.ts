import { Repository } from "typeorm";
import { TCategoryResponse } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const listAllCategoriesService = async (): Promise<TCategoryResponse[]> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const listCategories: TCategoryResponse[] = await categoryRepository.find();

  return listCategories;
};

export default listAllCategoriesService;
