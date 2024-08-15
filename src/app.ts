import express from "express";
import router from "./app/router";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "how are you?"
  })
});

app.use("/api", router);

app.use(globalErrorHandler)

export default app;
