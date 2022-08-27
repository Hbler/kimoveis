import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";

import AppDataSource from "../../data-source";

const listPropertyScheduleService = async (
  propertyId: string
): Promise<Property> => {
  const categoryRepository = AppDataSource.getRepository(Property);

  const property = await categoryRepository.findOne({
    where: {
      id: propertyId,
    },
    relations: {
      schedules: true,
    },
  });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  return property;
};

export default listPropertyScheduleService;
