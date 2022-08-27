import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";

import AppDataSource from "../../data-source";

const listCategoryPropertiesService = async (
  categoryId: string
): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: ["properties"],
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listCategoryPropertiesService;
