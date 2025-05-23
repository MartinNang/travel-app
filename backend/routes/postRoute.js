import express from "express";
import * as postController from "../controllers/postController.js";

import { connect } from "../index.js";

export const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  connect((conn) => postController.getAllPosts(conn, req, res));
});

postRouter.get("/:userId", (req, res) => {
  connect((conn) => postController.getPostsByUserId(conn, req, res));
});

postRouter.put("/itinerary/:itineraryId/user/:userId", (req, res) => {
  connect((conn) => postController.updatePost(conn, req, res));
});

// postRouter.post("/", upload.array("uploadedImages", 10), (req, res, next) => {
//   connect((conn) => postController.createPost(conn, req, res));
// });

// postRouter.post("/image-upload", upload.single("img"), (req, res) => {
//   console.log("req.body", req.body);
//   if (req.file && req.file.path) {
//     res.status(200).send(req.file.path);
//   } else {
//     res
//       .status(400)
//       .send({ error: "no file was uploaded", "request-body": req.body });
//   }
// });

postRouter.post("/:itineraryId", (req, res) => {
  connect((conn) => postController.createPost(conn, req, res));
});

postRouter.delete("/:overpassId", (req, res) => {
  connect((conn) => postController.deleteEvent(conn, req, res));
});
