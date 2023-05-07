import { Repository } from "typeorm";
import {
  TUser,
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/user.schemas";

const updateUserService = async (
  requestBody: TUserUpdateRequest,
  userId: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let user: TUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  user = {
    ...user!,
    ...requestBody,
  };

  const validateUser: TUserResponse = userResponseSchema.parse(user);

  await userRepository.save(validateUser);

  return validateUser;
};

export default updateUserService;
