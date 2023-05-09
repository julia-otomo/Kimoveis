import { Repository } from "typeorm";
import { TAddressRequest } from "../../interfaces/address.interfaces";
import {
  TRealEstateRequest,
  TRealEstateResponse,
} from "../../interfaces/realEstate.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCategoryResponse } from "../../interfaces/categories.interfaces";

const createRealEstateService = async (
  requestBody: TRealEstateRequest
): Promise<TRealEstateResponse> => {
  const requestAddress: TAddressRequest = requestBody.address!;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: TCategoryResponse | null = await categoryRepository.findOne({
    where: {
      id: requestBody.categoryId,
    },
  });

  const newAddress = addressRepository.create(requestAddress);

  await addressRepository.save(newAddress);

  const newRealEstate: TRealEstateResponse = realEstateRepository.create({
    ...requestBody,
    address: newAddress,
    category: category!,
  });

  await realEstateRepository.save(newRealEstate);

  return newRealEstate;
};

export default createRealEstateService;
