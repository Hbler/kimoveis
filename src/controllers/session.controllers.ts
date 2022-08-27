import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";

import newSessionService from "../services/session/newSession.service";

export const newSessionController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;

  const token = await newSessionService({ email, password });

  return res.json({ token });
};
