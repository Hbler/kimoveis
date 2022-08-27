import { Router } from "express";

import {
  createCategoryController,
  listAllCategoriesController,
  listCategoryPropertiesController,
} from "../controllers/categories.controllers";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { checkAdmStatusMiddleware } from "../middlewares/checkStatus.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { categorySchema } from "../schemas/category.schema";

const routes = Router();

export const categoryRoutes = () => {
  routes.post(
    "",
    checkAuthMiddleware,
    checkAdmStatusMiddleware,
    validationMiddleware(categorySchema),
    createCategoryController
  ); // create category
  routes.get("", listAllCategoriesController); // list all categories
  routes.get("/:id/properties", listCategoryPropertiesController); // list all entries with category

  return routes;
};
