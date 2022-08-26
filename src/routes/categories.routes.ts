import { Router } from "express";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { categorySchema } from "../schemas/category.schema";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("", checkAuthMiddleware, validationMiddleware(categorySchema)); // create category
  routes.get(""); // list all categories
  routes.get("/:id/properties"); // list all entries with category

  return routes;
};
