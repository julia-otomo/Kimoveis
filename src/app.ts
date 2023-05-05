import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleError from "./middlewares/handleErrors.middleware";
import userRouter from "./routes/user.routes";
import sessionRouter from "./routes/session.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.use(handleError);

export default app;
