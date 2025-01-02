import { Router } from "express";
import catchAsync from "../../utils/catchAsync";
import { categoryControllers } from "./category.controller";

const router = Router();

router.post("/", categoryControllers.createCategory);
router.get("/", categoryControllers.getAllCategories);
router.delete("/:id", categoryControllers.deleteCategory);
router.patch("/:id", categoryControllers.updateCategory);

export const categoryRouter = router;
