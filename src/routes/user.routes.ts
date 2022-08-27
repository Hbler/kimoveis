import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listAllUsersController,
} from "../controllers/users.controllers";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { checkAdmStatusMiddleware } from "../middlewares/checkStatus.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userSchema } from "../schemas/user.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post("", validationMiddleware(userSchema), createUserController); // create user
  routes.get(
    "",
    checkAuthMiddleware,
    checkAdmStatusMiddleware,
    listAllUsersController
  ); // list all users
  routes.delete(
    "/:id",
    checkAuthMiddleware,
    checkAdmStatusMiddleware,
    deleteUserController
  ); // delete user

  return routes;
};
