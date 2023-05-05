import { z } from "zod";
import {
  tokenSchema,
  userLoginSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userRequestSchema>;

type TUserResponse = z.infer<typeof userResponseSchema>;

type TUserUpdateRequest = z.infer<typeof userUpdateRequestSchema>;

type TUserLogin = z.infer<typeof userLoginSchema>;

type TToken = z.infer<typeof tokenSchema>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUserLogin,
  TToken,
};
