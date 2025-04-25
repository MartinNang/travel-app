import express from "express";
import * as userController from "../controllers/userController.js";

import { connect } from "../index.js";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  connect((conn) => userController.getAllUsers(conn, req, res));
});

userRouter.get("/profileName/:profileName", (req, res) => {
  connect((conn) => userController.findUserByProfileName(conn, req, res));
});

userRouter.get("/:userId", (req, res) => {
  connect((conn) => userController.findUserById(conn, req, res));
});

userRouter.post("/login", (req, res) => {
  connect((conn) => userController.findUser(conn, req, res));
});

userRouter.post("/signup", (req, res) => {
  connect((conn) => userController.createUser(conn, req, res));
});

userRouter.post("/:userId/newsletter", (req, res) => {
  connect((conn) => userController.subscribeUserToNewsletter(conn, req, res));
});

userRouter.put("/:userId", (req, res) => {
  connect((conn) => userController.updateUser(conn, req, res));
});

userRouter.delete("/:userId", (req, res) => {
  connect((conn) => userController.deleteUser(conn, req, res));
});
