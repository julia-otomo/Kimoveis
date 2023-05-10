import { z } from "zod";
import { realEstateResponseSchema } from "./realEstate.schemas";
import { userResponseSchema } from "./user.schemas";

const schedulesSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number(),
});

const schedulesRequestSchema = schedulesSchema.omit({
  id: true,
  userId: true,
});

const schedulesResponseSchema = schedulesSchema
  .omit({
    realEstateId: true,
    userId: true,
  })
  .extend({
    realEstate: realEstateResponseSchema,
    user: userResponseSchema,
  });

export { schedulesSchema, schedulesRequestSchema, schedulesResponseSchema };
