import express from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUserController);
userRouter.get("/:id", getUserController);
userRouter.get("/", getUsersController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;
