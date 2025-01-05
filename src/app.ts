import express from "express";
import cors from "cors";

import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/router";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "how are you?",
  });
});

app.use("/api", router);

// not found route

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "not found",
  });
});

app.use(globalErrorHandler);

export default app;
2