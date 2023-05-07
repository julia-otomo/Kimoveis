import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
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

const userUpdateRequestSchema = userRequestSchema.omit({
  id: true,
  admin: true,
});
const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

const tokenSchema = z.object({
  token: z.string(),
});

export {
  userSchema,
  userRequestSchema,
  userResponseSchema,
  userUpdateRequestSchema,
  userLoginSchema,
  tokenSchema,
};
