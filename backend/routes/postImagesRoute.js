import express from "express";
import * as postImagesController from "../controllers/postImageController.js";

import { connect } from "../index.js";
import {findPostImagesByUserId} from "../controllers/postImageController.js";

export const postImageRouter = express.Router();

postImageRouter.get("/", (req, res, next) => {
  connect((conn) => postImagesController.getAllPostImages(conn, req, res));
});

postImageRouter.get("/:postId", (req, res, next) => {
  connect((conn) =>
    postImagesController.findPostImagesByPostId(conn, req, res)
  );
});

postImageRouter.get("/user/:userId", (req, res, next) => {
  connect((conn) =>
      postImagesController.findPostImagesByUserId(conn, req, res)
  );
});

postImageRouter.post("/", (req, res, next) => {
  connect((conn) => postImagesController.createPostImage(conn, req, res));
});
