import { Router } from "express";

const routes = Router();

export const scheduleRoutes = () => {
  routes.post(""); // schedule a visit to a property
  routes.get("/properties/:id"); // list a property schedule

  return routes;
};
