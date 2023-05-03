import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional(),
  password: z.string().max(120),
  createdAt: z.date(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userResponseSchema = userSchema.omit({ password: true });

const userUpdateRequestSchema = userRequestSchema.partial();

export {
  userSchema,
  userRequestSchema,
  userResponseSchema,
  userUpdateRequestSchema,
};
