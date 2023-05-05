import { Repository } from "typeorm";
import { TUser, TUserResponse } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/user.schemas";

const getAllUsersService = async (): Promise<TUserResponse[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getUsers: TUser[] = await userRepository.find();

  const validateUser: TUserResponse[] = getUsers.map((user) =>
    userResponseSchema.parse(user)
  );

  return validateUser;
};

export default getAllUsersService;
