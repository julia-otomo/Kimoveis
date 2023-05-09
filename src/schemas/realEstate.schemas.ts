import { z } from "zod";
import { addressSchema, addressRequestSchema } from "./address.schemas";
import { categoryResponseSchema } from "./categories.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number()).default(0),
  size: z.number().int().positive(),
  address: addressRequestSchema,
  categoryId: z.number(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
});

const realEstateToCategorySchema = realEstateSchema.omit({
  categoryId: true,
  address: true,
});

const realEstateRequestSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateResponseSchema = realEstateSchema
  .omit({
    categoryId: true,
    address: true,
  })
  .extend({
    category: categoryResponseSchema,
    address: addressSchema,
  });

export {
  realEstateRequestSchema,
  realEstateSchema,
  realEstateResponseSchema,
  realEstateToCategorySchema,
};
