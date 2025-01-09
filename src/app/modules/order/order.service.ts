import { AppError } from "../../errors/AppError";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: TOrder) => {
  // Start stock deduction process
  for (const item of payload.products) {
    const product = await Product.findById(item.productId);
    if (!product) {
      throw new AppError(404,`Product with ID ${item.productId} not found`);
    }

    // Check if there is enough stock
    if (product.stock < item.quantity) {
      throw new AppError(404,
        `Insufficient stock for product "${product.name}". Available: ${product.stock}, Required: ${item.quantity}`
      );
    }

    // Deduct stock
    product.stock -= item.quantity;
    await product.save();
  }

  // Create the order
  const result = await Order.create(payload);
  return result;
};

export const orderServices = {
  createOrder,
};
