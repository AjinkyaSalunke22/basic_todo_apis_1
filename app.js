import express from "express";
import jsonParserMiddleware from "./middlewares/jsonParserMiddleware";

const app = express();

app.use(jsonParserMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use();

export default app;
