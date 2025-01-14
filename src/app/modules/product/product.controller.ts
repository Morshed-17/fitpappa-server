import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";
import { productServices } from "./product.service";
import mongoose from "mongoose";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProduct(req.body);
  sendResponse(res, 200, true, "Product created successfully", result);
});

// get all categories
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const { search, categories, sort, page, limit, minPrice, maxPrice } =
    req.query;

  //*categories
  const categoryIds = categories
    ? (categories as string).split(",").map((id) => id)
    : undefined;

  const pageNumber = page ? parseInt(page as string, 10) : 1;
  const limitNumber = limit ? parseInt(limit as string, 10) : 10;

  //* MIn and max price

  const min = minPrice ? parseFloat(minPrice as string) : undefined;
  const max = maxPrice ? parseFloat(maxPrice as string) : undefined;

  const result = await productServices.getAllProducts(
    search as string,
    categoryIds,
    sort as string,
    pageNumber,
    limitNumber,
    min,
    max
  );
  sendResponse(res, 200, true, "Products fetched successfully", result);
});

const getAProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.getAProduct(req.params.id);
  sendResponse(res, 200, true, "Product fetched successfully", result);
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  await productServices.deleteProduct(req.params.id);
  sendResponse(res, 200, true, "Product deleted successfully", null);
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.updateProduct(req.params.id, req.body);
  sendResponse(res, 200, true, "Product updated successfully", result);
});

export const productControllers = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getAProduct,
};
