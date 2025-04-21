import express from "express";
import * as postController from "../controllers/postController.js";

import { connect } from "../index.js";

export const postRouter = express.Router();

postRouter.get("/", (req, res, next) => {
  connect((conn) => postController.getAllPosts(conn, req, res));
});

postRouter.get("/:userId", (req, res, next) => {
  connect((conn) => postController.getPostsByUserId(conn, req, res));
});

postRouter.put("itinerary/:itineraryId/user/:userId", (req, res, next) => {
  connect((conn) => postController.updatePost(conn, req, res));
});

postRouter.post("/", (req, res, next) => {
  connect((conn) => postController.createPost(conn, req, res));
});

postRouter.post("/:itineraryId", (req, res, next) => {
  connect((conn) => postController.createEvent(conn, req, res));
});

postRouter.delete("/:overpassId", (req, res, next) => {
  connect((conn) => postController.deleteEvent(conn, req, res));
});
