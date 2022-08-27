import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import listPropertyScheduleService from "../services/schedules/listPropertySchedule.service";
import scheduleVisitService from "../services/schedules/scheduleVisit.service";

export const scheduleVisitController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { date, hour, propertyId }: Omit<IScheduleRequest, "userId"> = req.body;

  const schedule = await scheduleVisitService({
    date,
    hour,
    propertyId,
    userId,
  });

  if (schedule) return res.status(201).json({ message: "Schedule created" });
};

export const listPropertyScheduleController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const property = await listPropertyScheduleService(id);

  return res.json(property);
};
