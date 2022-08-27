import { Router } from "express";
import {
  createPropertyController,
  listAllPropertiesController,
} from "../controllers/properties.controllers";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { checkAdmStatusMiddleware } from "../middlewares/checkStatus.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { propertySchema } from "../schemas/property.schema";

const routes = Router();

export const propertyRoutes = () => {
  routes.post(
    "",
    checkAuthMiddleware,
    checkAdmStatusMiddleware,
    validationMiddleware(propertySchema),
    createPropertyController
  ); // create property
  routes.get("", listAllPropertiesController); // list all properties

  return routes;
};
