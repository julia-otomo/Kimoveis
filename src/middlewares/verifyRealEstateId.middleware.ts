import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";

const verifyRealEstateId = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = request.params.id
    ? Number(request.params.id)
    : Number(request.body.realEstateId);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
  });

  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return next();
};

export default verifyRealEstateId;
