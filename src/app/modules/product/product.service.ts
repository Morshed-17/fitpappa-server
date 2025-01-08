//create a service to create category

import mongoose, { ObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProducts = async (
  searchQuery?: string,
  categoryIds?: string[],
  sort?: string,
  page: number = 1,
  limit: number = 5,
  minPrice?: number,
  maxPrice?: number
) => {
  const filter: any = {};

  //*Add search query

  if (searchQuery) {
    filter.name = { $regex: searchQuery, $options: "i" };
  }

  //*Add categories filter

  if (categoryIds && categoryIds.length > 0) {
    filter.category = {
      $in: categoryIds.map((id) => new mongoose.Types.ObjectId(id)),
    };
  }
  //* Price filter min max

  //* Add price filter
  if (minPrice !== undefined || maxPrice !== undefined) {
    filter.price = {};
    if (minPrice !== undefined) filter.price.$gte = minPrice; // Minimum price
    if (maxPrice !== undefined) filter.price.$lte = maxPrice; // Maximum price
  }

  //* sorting by price

  const sortOrder: any = {};

  if (sort) {
    sortOrder.price = sort === "asc" ? 1 : -1;
  }

  //* calculate pagination
  const skip = (page - 1) * limit;

  //*count total documents for pagination metadata

  const result = await Product.find(filter)
    .populate("category")
    .sort(sortOrder)
    .skip(skip)
    .limit(limit);

  const totalDocuments = await Product.countDocuments(filter);
  return {
    products: result,
    totalDocuments,
    totalPages: Math.ceil(totalDocuments / limit),
    currentPage: page,
  };
};

const getAProduct = async (id: string) => {
  const result = await Product.findById(id).populate('category');
  console.log(result)
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const updateProduct = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getAProduct,
};
