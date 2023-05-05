import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import getAllUsersService from "../services/users/getAllUsers.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TUserRequest = request.body;

  const user: TUserResponse = await createUserService(requestBody);

  return response.status(201).json(user);
};

const getAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: TUserResponse[] = await getAllUsersService();

  return response.json(users);
};

export { createUserController, getAllUsersController };
