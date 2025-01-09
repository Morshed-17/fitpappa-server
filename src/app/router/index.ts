import { Router } from "express";
import { categoryRouter } from "../modules/category/category.route";
import { productRouter } from "../modules/product/product.route";
import { orderRouter } from "../modules/order/order.route";

const router = Router();

const routes = [
  {
    path: "/categories",
    router: categoryRouter,
  },
  {
    path: "/products",
    router: productRouter,
  },
  {
    path: "/orders",
    router: orderRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
