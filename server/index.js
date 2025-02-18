import user from "./models/user.js";
import * as userController from "./controllers/userController.js";
import express from "express";
import cors from "cors";
const app = express();
const PORT = 8080;

// const itineraryController = require("./controllers/index.js");

app.use(express.json());
let corsOptions = {
  origin: ["http://localhost"],
};

app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello, World!");
});

// Route to get all users
app.get("/api/users", (req, res) => userController.getAllUsers(req, res));

// Log in: check if user exists
app.post("/api/login", (req, res) => userController.findUser(req, res));

// Sign up: Create new user
app.post("/api/signup", (req, res) => userController.createUser(req, res));

// Update profile name
app.put("/api/users/:userId/updateProfileName", (req, res) =>
  userController.updateProfileName(req, res)
);

// Delete user
app.delete("/api/users/:userId", (req, res) =>
  userController.deleteUser(req, res)
);

// TODO: find itineraries by user id

// Route to like a post
// app.post("/api/like/:id", (req, res) => {
//   const id = req.params.id;
//   db.query(
//     "UPDATE posts SET likes = likes + 1 WHERE id = ?",
//     id,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//     }
//   );
// });

// // Route to delete a post

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;

//   db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
