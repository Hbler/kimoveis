import { Router } from "express";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { propertySchema } from "../schemas/property.schema";

const routes = Router();

export const propertyRoutes = () => {
  routes.post("", checkAuthMiddleware, validationMiddleware(propertySchema)); // create property
  routes.get(""); // list all properties

  return routes;
};
