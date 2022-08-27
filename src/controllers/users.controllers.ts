import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserRequest } from "../interfaces/users";

import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listAllUsersService from "../services/users/listAllUsers.service";

export const createUserController = async (req: Request, res: Response) => {
  const { email, isAdm, name, password }: IUserRequest = req.body;

  const user = await createUserService({ email, isAdm, name, password });

  return res.status(201).json(instanceToPlain(user));
};

export const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService();

  return res.json(instanceToPlain(users));
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const users = await deleteUserService(id);

  return res.status(204).send();
};
