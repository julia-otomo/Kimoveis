import { Request, Response } from "express";
import { TToken, TUserLogin } from "../interfaces/user.interfaces";
import loginUser from "../services/session/loginUser.service";

const userLoginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TUserLogin = request.body;

  const doLogin: TToken = await loginUser(requestBody);

  return response.json(doLogin);
};

export default userLoginController;
