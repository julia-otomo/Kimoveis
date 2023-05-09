import { z } from "zod";
import { realEstateToCategorySchema } from "./realEstate.schemas";

const categoryRequestSchema = z.object({
  name: z.string().max(45),
});

const categoryResponseSchema = categoryRequestSchema.extend({
  id: z.number(),
});

const categoryWithRealEstateSchema = categoryResponseSchema.extend({
  realEstate: realEstateToCategorySchema.array(),
});

export {
  categoryRequestSchema,
  categoryResponseSchema,
  categoryWithRealEstateSchema,
};
