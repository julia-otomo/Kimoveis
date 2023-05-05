import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/user.schemas";
import { hashSync } from "bcryptjs";

const createUserService = async (
  requestBody: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  requestBody.password = hashSync(requestBody.password, 10);

  const user: User = userRepository.create(requestBody);

  await userRepository.save(user);

  const validateUser: TUserResponse = userResponseSchema.parse(user);

  return validateUser;
};

export default createUserService;
