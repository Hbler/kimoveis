import AppDataSource from "../../data-source";
import { Address } from "../../entities/adress.entity";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async ({
  address,
  size,
  value,
  categoryId,
}: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const categoryRepository = AppDataSource.getRepository(Category);
  const addressRepository = AppDataSource.getRepository(Address);

  const category = await categoryRepository.findOne({
    where: { id: categoryId },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const addresses = await addressRepository.find();

  const addressAlreadyExists = addresses.find(
    (adrs) =>
      adrs.district === address.district && adrs.number === address.number
  );

  if (addressAlreadyExists) {
    throw new AppError("Address already exists");
  }

  const newAddress = addressRepository.create({ ...address });
  await addressRepository.save(newAddress);

  // apenas testando uma outra forma de criar
  const property = new Property();
  property.address = newAddress;
  property.category = category;
  property.size = size;
  property.value = value;

  propertyRepository.create(property);
  await propertyRepository.save(property);

  return property;
};

export default createPropertyService;
