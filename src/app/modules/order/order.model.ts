// create a mongoose schema and model for category module

import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import catchAsync from "../../utils/catchAsync";
import { TProduct } from "../product/product.interface";

const orderSchema = new Schema<TOrder>({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  paymentMethod: {
    type: String,
    enum: ["Cash on Delivery", "card"],
    required: true,
  },
  totalAmount: { type: Number, required: true, min: 0 },
});


export const Order = model<TOrder>("Order", orderSchema);
