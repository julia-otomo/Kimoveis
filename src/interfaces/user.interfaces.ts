import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userRequestSchema>;

type TUserResponse = z.infer<typeof userResponseSchema>;

type TUserUpdateRequest = z.infer<typeof userUpdateRequestSchema>;

export { TUser, TUserRequest, TUserResponse, TUserUpdateRequest };
