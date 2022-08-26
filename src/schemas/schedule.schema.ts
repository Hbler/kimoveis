import * as yup from "yup";
import { SchemaOf } from "yup";
import { IScheduleRequest } from "../interfaces/schedules";

export const scheduleSchema: SchemaOf<IScheduleRequest> = yup.object().shape({
  userId: yup.string().required(),
  propertyId: yup.string().required(),
  date: yup.string().required(),
  hour: yup.string().required(),
});
