import { Router } from "express";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userSchema } from "../schemas/user.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post("", validationMiddleware(userSchema)); // create user
  routes.get("", checkAuthMiddleware); // list all users
  routes.delete("/:id", checkAuthMiddleware); // delete user

  return routes;
};
