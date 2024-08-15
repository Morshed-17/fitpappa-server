import { Router } from "express";
import catchAsync from "../../utils/catchAsync";
import { AppError } from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";


const router = Router();

router.get("/", catchAsync(async (req, res) => {
    res.send("Hello World!");
}))

export const categoryRouter = router