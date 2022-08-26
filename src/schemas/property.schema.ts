import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest, IAddressRequest } from "../interfaces/properties";

const addressSchema: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup
    .string()
    .required()
    .test("len", "Must be exactly 8 characters", (val) => val!.length === 8),
  number: yup.string().required(),
  city: yup.string().required(),
  state: yup
    .string()
    .required()
    .test("len", "Must be exactly 2 characters", (val) => val!.length === 2),
});

export const propertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: addressSchema,
  categoryId: yup.string().required(),
});
