import { Schema } from "mongoose";


export type TProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Schema.Types.ObjectId;
  images: string[];
};
