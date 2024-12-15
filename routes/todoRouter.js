import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodoController,
  getTodosController,
  updateTodoController,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.post("/", createTodoController);
todoRouter.get("/:id", getTodoController);
todoRouter.get("/", getTodosController);
todoRouter.put("/:id", updateTodoController);
todoRouter.delete("/:id", deleteTodoController);

export default todoRouter;
