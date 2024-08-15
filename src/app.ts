import express from "express";

import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/router";
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  res.json({
    message: "how are you?"
  })
});

app.use("/api", router);
// not found route

app.use("*", (req, res) => {
  res.json({
    statusCode: 404,
    message: "not found"
  })
});

app.use(globalErrorHandler)

export default app;
