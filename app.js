import express from "express";
import jsonParserMiddleware from "./middlewares/jsonParserMiddleware.js";
import urlEncoderMiddleware from "./middlewares/urlEncoderMiddleware.js";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import logerMiddleware from "./middlewares/logerMiddleware.js";
import securityMiddleware from "./middlewares/securityMiddleware.js";
import cookieParserMiddleware from "./middlewares/cookieParserMiddleware.js";
import homeRouter from "./routes/homeRouter.js";
import todoRouter from "./routes/todoRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(jsonParserMiddleware);
app.use(urlEncoderMiddleware);
app.use(corsMiddleware);
app.use(logerMiddleware);
app.use(securityMiddleware);
app.use(cookieParserMiddleware);

app.use("/v1/api", homeRouter);
app.use("/v1/api/todo", todoRouter);
app.use("/v1/api/user", userRouter);

export default app;
