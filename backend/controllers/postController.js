import Post from "../models/post.js";
import * as postService from "../services/postService.js";
import * as postImageService from "../services/postImageService.js";

export function getAllPosts(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all posts");
    postService.getAllPosts(conn, (result) => {
      if (result) {
        res.status(200);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function getPostsByUserId(conn, req, res) {
  try {
    console.log("getting posts by user id", req.params.userId);
    postService.findPostsByUserId(conn, req.params.userId, (result) => {
      if (result) {
        res.status(200);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function createPost(conn, req, res) {
  try {
    const post = new Post(
      req.body.itineraryId,
      req.body.userId,
      req.body.description
    );
    const files = req.files;
    console.log("files", files);

    postService.createPost(conn, post, (result) => {
      if (result && result.length > 0) {
        let postId = result[0].id;
        console.log("postId", postId);
        for (let file of req.files) {
          console.log("post image file", file);
          postImageService.createPostImage(conn, postId, file.path, req.body.userId, () => {
            // TODO
            res.status(200).send();
          });
        }
      } else {
        res.status(500).send();
      }
    });
  } catch (code) {
    res.status(code);
  }
}

export function updatePost(conn, req, res) {
  try {
    const itineraryId = req.params.itineraryId;
    const userId = req.params.userId;

    console.log("updating post", req.body);

    const post = new Post(
      req.body.itineraryId,
      req.body.userId,
      req.body.description,
      req.body.image,
      req.body.createdAt
    );

    postService.updatePost(conn, post, itinerary, (result) => {
      res.status(200);
      res.send(result);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}

export function deletePost(conn, req, res) {
  try {
    const itineraryId = req.params.itineraryId;
    const userId = req.params.userId;
    // console.log("itineraryId", itineraryId);

    postService.deletePost(conn, itineraryId, userId, () => {
      res.status(204);
    });
  } catch (code) {
    res.status(code);
  } finally {
    res.send();
  }
}
