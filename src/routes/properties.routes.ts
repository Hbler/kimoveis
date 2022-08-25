import { Router } from "express";

const routes = Router();

export const propertyRoutes = () => {
  routes.post(""); // create property
  routes.get(""); // list all properties

  return routes;
};
