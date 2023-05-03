import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleError from "./middlewares/handleErrors.middleware";
import userRouter from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.use(handleError);

export default app;
