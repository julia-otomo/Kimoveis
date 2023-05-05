import { Repository } from "typeorm";
import { TToken, TUser, TUserLogin } from "../../interfaces/user.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import "dotenv/config";
import { sign } from "jsonwebtoken";

const loginUser = async (requestBody: TUserLogin): Promise<TToken> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: TUser | null = await userRepository.findOne({
    where: {
      email: requestBody.email,
    },
  });

  const token: string = sign(
    { admin: user!.admin },
    String(process.env.SECRET_KEY),
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user!.id),
    }
  );

  return { token };
};

export default loginUser;
