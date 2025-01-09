import mongoose from "mongoose";

export type TOrder = {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
  }[];
  paymentMethod: "Cash on Delivery" | "card";
  totalAmount: number;
};
