import { Router } from "express";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { scheduleSchema } from "../schemas/schedule.schema";

const routes = Router();

export const scheduleRoutes = () => {
  routes.post("", validationMiddleware(scheduleSchema)); // schedule a visit to a property
  routes.get("/properties/:id", checkAuthMiddleware); // list a property schedule

  return routes;
};
