import { Router } from "express";

const routes = Router();

export const sessionRoutes = () => {
  routes.post(""); // new session

  return routes;
};
