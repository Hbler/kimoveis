import * as yup from "yup";
import { SchemaOf } from "yup";
import { IScheduleRequest } from "../interfaces/schedules";

export const scheduleSchema: SchemaOf<Omit<IScheduleRequest, "userId">> = yup
  .object()
  .shape({
    propertyId: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required(),
  });
