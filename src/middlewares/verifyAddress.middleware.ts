import { NextFunction, Request, Response } from "express";
import { TAddress } from "../interfaces/address.interfaces";
import { Repository } from "typeorm";
import { Address } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";

const verifyAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const requestAddress: TAddress = request.body.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  let findAddress: TAddress | null;

  if (requestAddress.number) {
    findAddress = await addressRepository.findOne({
      where: {
        street: requestAddress.street,
        zipCode: requestAddress.zipCode,
        city: requestAddress.city,
        state: requestAddress.state,
        number: requestAddress.number,
      },
    });
  } else {
    findAddress = await addressRepository.findOne({
      where: {
        street: requestAddress.street,
        zipCode: requestAddress.zipCode,
        city: requestAddress.city,
        state: requestAddress.state,
      },
    });
  }

  if (findAddress) {
    throw new AppError("Address already exists", 409);
  }

  next();
};

export default verifyAddress;
