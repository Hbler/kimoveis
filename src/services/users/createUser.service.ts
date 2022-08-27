import { hash } from "bcryptjs";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";

import AppDataSource from "../../data-source";

const createUserService = async ({
  email,
  isAdm,
  name,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("User already exists");
  }

  if (!password) {
    throw new AppError("Password is a required field");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
