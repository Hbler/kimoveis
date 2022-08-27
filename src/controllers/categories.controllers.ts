import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/categories/createCategory.service";
import listAllCategoriesService from "../services/categories/listAllCategories.service";
import listCategoryPropertiesService from "../services/categories/listCategoryProperties.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const { name }: ICategoryRequest = req.body;

  const category = await createCategoryService({ name });

  return res.status(201).json(category);
};

export const listAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categories = await listAllCategoriesService();

  return res.json(categories);
};

export const listCategoryPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const category = await listCategoryPropertiesService(id);

  return res.json(category);
};
