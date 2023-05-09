import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TRealEstateResponse } from "../../interfaces/realEstate.interfaces";

const listAllRealEstatesService = async (): Promise<TRealEstateResponse[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const allRealEstates: TRealEstateResponse[] = await realEstateRepository.find(
    {
      relations: {
        address: true,
      },
    }
  );

  return allRealEstates;
};

export default listAllRealEstatesService;
