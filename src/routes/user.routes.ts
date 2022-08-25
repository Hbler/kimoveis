import { Router } from "express";

const routes = Router();

export const userRoutes = () => {
  routes.post(""); // create user
  routes.get(""); // list all users
  routes.delete("/:id"); // delete user

  return routes;
};
