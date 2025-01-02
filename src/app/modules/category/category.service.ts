//create a service to create category

import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};
const getAllCategories = async () => {
  const result = await Category.find();
  return result;
};

const deleteCategory = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};

const updateCategory = async (id: string, payload: TCategory) => {
  const result = await Category.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const categoryServices = {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
