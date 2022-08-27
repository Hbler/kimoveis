import { Schedule } from "../../entities/schedule.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { User } from "../../entities/user.entity";

const scheduleVisitService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule);
  const propertyRepository = AppDataSource.getRepository(Property);
  const userRepository = AppDataSource.getRepository(User);

  const properties = await propertyRepository.find();
  const schedules = await scheduleRepository.find();
  const users = await userRepository.find();

  const visit = new Date(`${date} ${hour}`);
  const visitDay = visit.getDay();
  const visitHour = visit.getHours();
  const visitMinutes = visit.getMinutes();

  const property = properties.find((property) => property.id === propertyId);

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  const shceduleAlreadyExists = schedules.find((schedule) => {
    const scheduledVisit = new Date(`${schedule.date} ${schedule.hour}`);

    return (
      scheduledVisit.getDate() === visit.getDate() &&
      scheduledVisit.getMonth() === visit.getMonth() &&
      scheduledVisit.getHours() === visit.getHours() &&
      scheduledVisit.getMinutes() === visit.getMinutes()
    );
  });

  if (shceduleAlreadyExists) {
    throw new AppError("User schedule already exists");
  }

  const user = users.find((user) => user.id === userId);

  if (visitHour < 8 || (visitHour >= 18 && visitMinutes > 0)) {
    throw new AppError("Invalid hour");
  }

  if (visitDay < 1 || visitDay > 5) {
    throw new AppError("Invalid Date");
  }

  const schedule = new Schedule();
  schedule.date = date;
  schedule.hour = hour;
  schedule.property = property;
  schedule.user = user!;

  scheduleRepository.create(schedule);
  await scheduleRepository.save(schedule);

  return true;
};

export default scheduleVisitService;
