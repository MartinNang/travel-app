import express from "express";
import * as userController from "../controllers/userController.js";

import { connect } from "../index.js";

export const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  connect((conn) => userController.getAllUsers(conn, req, res));
});

userRouter.post("/login", (req, res, next) => {
  connect((conn) => userController.findUser(conn, req, res));
});

userRouter.post("/signup", (req, res, next) => {
  connect((conn) => userController.createUser(conn, req, res));
});

userRouter.get("/:userId", (req, res, next) => {
  connect((conn) => userController.findUserById(conn, req, res));
});

userRouter.put("/:userId", (req, res, next) => {
  connect((conn) => userController.updateUser(conn, req, res));
});

userRouter.delete("/:userId", (req, res, next) => {
  connect((conn) => userController.deleteUser(conn, req, res));
});
