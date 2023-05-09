import { Request, Response } from "express";
import {
  TRealEstateRequest,
  TRealEstateResponse,
} from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import listAllRealEstatesService from "../services/realEstate/listAllRealEstate.service";

const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TRealEstateRequest = request.body;

  const realEstate: TRealEstateResponse = await createRealEstateService(
    requestBody
  );

  return response.status(201).json(realEstate);
};

const listAllRealEstatesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allRealEstates: TRealEstateResponse[] =
    await listAllRealEstatesService();

  return response.json(allRealEstates);
};

export { createRealEstateController, listAllRealEstatesController };
