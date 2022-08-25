import { Express } from "express";
import { categoryRoutes } from "./categories.routes";
import { propertyRoutes } from "./properties.routes";
import { scheduleRoutes } from "./schedule.routes";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/categories", categoryRoutes());
  app.use("/properties", propertyRoutes());
  app.use("/schedules", scheduleRoutes());
};
