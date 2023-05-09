import { z } from "zod";

import {
  categoryRequestSchema,
  categoryResponseSchema,
  categoryWithRealEstateSchema,
} from "../schemas/categories.schemas";

type TCategoryRequest = z.infer<typeof categoryRequestSchema>;

type TCategoryResponse = z.infer<typeof categoryResponseSchema>;

type TCategoryWithRealEstate = z.infer<typeof categoryWithRealEstateSchema>;
export { TCategoryRequest, TCategoryResponse, TCategoryWithRealEstate };
