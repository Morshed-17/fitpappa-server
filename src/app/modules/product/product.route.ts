import { Router } from "express";
import { productControllers } from "./product.controller";

const router = Router();

router.post("/", productControllers.createProduct);
router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getAProduct);
router.delete("/:id", productControllers.deleteProduct);
router.patch("/:id", productControllers.updateProduct);

export const productRouter = router;
