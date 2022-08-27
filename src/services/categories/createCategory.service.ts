import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

import AppDataSource from "../../data-source";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.find();
  const categoryAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError("Category already exists");
  }

  const category = categoryRepository.create({
    name,
  });

  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;
