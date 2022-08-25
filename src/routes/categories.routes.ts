import { Router } from "express";

const routes = Router();

export const categoryRoutes = () => {
  routes.post(""); // create category
  routes.get("/:id/properties"); // list all entries with category

  return routes;
};
