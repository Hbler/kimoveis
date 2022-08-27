import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

import AppDataSource from "../../data-source";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const toInactive = users.find((user) => user.id === id);

  if (!toInactive) {
    throw new AppError("User not found", 404);
  }

  if (!toInactive.isActive) {
    throw new AppError("Inactive user");
  }

  await userRepository.update(toInactive!.id, { isActive: false });
};

export default deleteUserService;
