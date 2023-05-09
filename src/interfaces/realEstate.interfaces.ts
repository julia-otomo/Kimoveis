import { z } from "zod";
import {
  realEstateRequestSchema,
  realEstateResponseSchema,
  realEstateSchema,
  realEstateToCategorySchema,
} from "../schemas/realEstate.schemas";

type TRealEstate = z.infer<typeof realEstateSchema>;

type TRealEstateRequest = z.infer<typeof realEstateRequestSchema>;

type TRealEstateResponse = z.infer<typeof realEstateResponseSchema>;

type TRealEstateCategory = z.infer<typeof realEstateToCategorySchema>;

export {
  TRealEstate,
  TRealEstateResponse,
  TRealEstateRequest,
  TRealEstateCategory,
};
