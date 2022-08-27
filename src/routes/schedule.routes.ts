import { Router } from "express";

import {
  listPropertyScheduleController,
  scheduleVisitController,
} from "../controllers/schedules.controllers";
import { checkAuthMiddleware } from "../middlewares/checkAuth.middleware";
import { checkAdmStatusMiddleware } from "../middlewares/checkStatus.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { scheduleSchema } from "../schemas/schedule.schema";

const routes = Router();

export const scheduleRoutes = () => {
  routes.post(
    "",
    checkAuthMiddleware,
    validationMiddleware(scheduleSchema),
    scheduleVisitController
  ); // schedule a visit to a property
  routes.get(
    "/properties/:id",
    checkAuthMiddleware,
    checkAdmStatusMiddleware,
    listPropertyScheduleController
  ); // list a property schedule

  return routes;
};
