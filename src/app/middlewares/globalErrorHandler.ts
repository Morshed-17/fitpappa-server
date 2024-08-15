// Create a error handler middleware for express

import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({ statusCode: err.statusCode,error: err.message });
}