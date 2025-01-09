import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";
import { orderServices } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await orderServices.createOrder(req.body);
  sendResponse(res, 200, true, "Order created successfully", result);
});

export const orderControllers = {
  createOrder,
};
