import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import { categoryServices } from "./category.service";
import { sendResponse } from "../../utils/sendResponse";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryServices.createCategory(req.body);
  sendResponse(res, 200, true, "Category created successfully", result);
});

// get all categories
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryServices.getAllCategories();
  sendResponse(res, 200, true, "Categories fetched successfully", result);
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  await categoryServices.deleteCategory(req.params.id);
  sendResponse(res, 200, true, "Category deleted successfully", null);
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryServices.updateCategory(req.params.id, req.body);
  sendResponse(res, 200, true, "Category updated successfully", result);
});

export const categoryControllers = {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
