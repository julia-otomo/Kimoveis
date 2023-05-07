import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../interfaces/user.interfaces";
import createUserService from "../services/users/createUser.service";
import getAllUsersService from "../services/users/getAllUsers.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

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

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TUserUpdateRequest = request.body;
  const userId: number = Number(request.params.id);

  const user: TUserResponse = await updateUserService(requestBody, userId);

  return response.json(user);
};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  await deleteUserService(userId);

  return response.status(204).send();
};

export {
  createUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
};
