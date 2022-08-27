import { Property } from "../../entities/property.entity";

import AppDataSource from "../../data-source";

const listAllPropertiesService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const properties = propertyRepository.find();

  return properties;
};

export default listAllPropertiesService;
