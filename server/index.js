const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(express.json());
let corsOptions = {
  origin: ["http://localhost"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send("Hello, World!");
});

// Route to get all users
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200);
    res.send(result);
  });
});

// Log in: check if user exists
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log("request", req.body);
  db.query(
    `SELECT * FROM users WHERE username = (?) AND password = (?)`,
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length === 1) {
        res.status(200);
      } else if (result.length === 0) {
        res.status(403);
      }
      res.send(result);
    }
  );
});

// Sign up: Create new user
app.post("/api/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        res.status(200);
      }
      console.log(result);
      res.send();
    }
  );
});

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
