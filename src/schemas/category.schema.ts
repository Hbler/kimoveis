import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICategoryRequest } from "../interfaces/categories";

export const categorySchema: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required(),
});
