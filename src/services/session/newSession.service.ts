import "dotenv/config";
import jwt from "jsonwebtoken";

import { compare } from "bcryptjs";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";

import AppDataSource from "../../data-source";

const newSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  if (!user.isActive) {
    throw new AppError("User is not active");
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isActive: user.isActive,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "2h",
    }
  );

  return token;
};

export default newSessionService;
