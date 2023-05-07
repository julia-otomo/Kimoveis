import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUser } from "../../interfaces/user.interfaces";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: TUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  await userRepository.softRemove(user!);
};

export default deleteUserService;
