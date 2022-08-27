import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listAllPropertiesService from "../services/properties/listAllProperties.service";

export const createPropertyController = async (req: Request, res: Response) => {
  const { address, size, value, categoryId }: IPropertyRequest = req.body;

  const property = await createPropertyService({
    address,
    size,
    value,
    categoryId,
  });

  return res.status(201).json(property);
};

export const listAllPropertiesController = async (
  req: Request,
  res: Response
) => {
  const property = await listAllPropertiesService();

  return res.json(property);
};
