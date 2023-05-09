import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCategoryWithRealEstate } from "../../interfaces/categories.interfaces";

const listAllPropertiesByCategoryService = async (
  categoryId: number
): Promise<TCategoryWithRealEstate> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const properties: TCategoryWithRealEstate | null =
    await categoryRepository.findOne({
      where: {
        id: categoryId,
      },
      relations: {
        realEstate: true,
      },
    });

  return properties!;
};

export default listAllPropertiesByCategoryService;
