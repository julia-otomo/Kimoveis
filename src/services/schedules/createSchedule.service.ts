import { Repository } from "typeorm";
import {
  IScheduleSuccess,
  TScheduleRequest,
} from "../../interfaces/schedules.interfaces";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUser } from "../../interfaces/user.interfaces";

const createScheduleService = async (
  requestBody: TScheduleRequest,
  userId: number
): Promise<IScheduleSuccess> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findUser: TUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: requestBody.realEstateId,
    },
  });

  const newSchedule = scheduleRepository.create({
    ...requestBody,
    realEstate: findRealEstate!,
    user: findUser!,
  });

  await scheduleRepository.save(newSchedule);

  return { message: "Schedule created" };
};

export default createScheduleService;
