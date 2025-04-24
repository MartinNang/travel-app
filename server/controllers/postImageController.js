import * as postImageService from "../services/postImageService.js";

export function getAllPostImages(conn, req, res) {
  try {
    console.log("response:", res);
    console.log("getting all post images");
    postImageService.getAllPostImages(conn, (result) => {
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

export function findPostImagesByPostId(conn, req, res) {
  try {
    postImageService.findPostImagesByPostId(
      conn,
      req.params.postId,
      (result) => {
        if (result.length === 1) {
          res.status(200);
        } else if (result.length === 0) {
          res.status(403);
        }
        res.send(result);
      }
    );
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function findPostImagesByUserId(conn, req, res) {
  try {
    postImageService.findPostImagesByUserId(
        conn,
        req.params.userId,
        (result) => {
          if (result.length === 1) {
            res.status(200);
          } else if (result.length === 0) {
            res.status(403);
          }
          res.send(result);
        }
    );
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export function createPostImage(conn, req, res) {
  try {
    let postImage = new PostImage(req.body.postId, req.body.userId, req.body.imagePath);
    postImageService.createPostImage(conn, postImage,(result) => {
      if (result.length === 1) {
        res.status(200);
      } else if (result.length === 0) {
        res.status(403);
      }
      res.send(result);
    });
  } catch (code) {
    res.status(code);
    res.send();
  }
}

export async function uploadImage(req, res) {
  res.status(200);
  return res.send("Uploaded file");
}
