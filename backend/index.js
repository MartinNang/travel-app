import express from "express";
import morgan from "morgan";
import cors from "cors";
import mariadb from "mariadb";
import multer from "multer";

const app = express();
import * as eventController from "./controllers/eventController.js";
import * as itineraryController from "./controllers/itineraryController.js";
import * as userController from "./controllers/userController.js";
import * as postImagesController from "./controllers/postImagesController.js";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
const hostname = "nodejs_2425-cs7025-group1";
const port = 3000;
const project_name = "en route";

// Create a connection pool
const pool = mariadb.createPool({
  host: "mariadb_2425-cs7025-group1",
  user: "2425-cs7025-group1",
  password: "jdgMm6VkTKTmhMv6",
  database: "2425-cs7025-group1_db",
  connectionLimit: 5,
});

// Use Morgan for logging HTTP requests
app.use(morgan("dev"));

app.use(express.json());

// Use CORS
app.use(cors());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello");
});

// Users
// return all users
app.get("/users", async (req, res) => {
  const conn = await pool.getConnection();
  userController.getAllUsers(conn, req, res);
  conn.release();
});

// check if user exists
app.post("/login", async (req, res) => {
  const conn = await pool.getConnection();
  userController.findUser(conn, req, res);
  conn.release();
});

// create new user
app.post("/signup", async (req, res) => {
  const conn = await pool.getConnection();
  userController.createUser(conn, req, res);
  conn.release();
});

// update profile name
app.put("/users/:userId/profileName", async (req, res) => {
  const conn = await pool.getConnection();
  userController.updateProfileName(conn, req, res);
  conn.release();
});

// update profile image
app.put("/users/:userId/profileImage", async (req, res) => {
  const conn = await pool.getConnection();
  userController.updateProfileImage(conn, req, res);
  conn.release();
});

// delete user
app.delete("/users/:userId", async (req, res) => {
  const conn = await pool.getConnection();
  userController.deleteUser(conn, req, res);
  conn.release();
});

// return all itineraries from one user
app.get("/users/:userId/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.findItinerariesByUserId(conn, req, res);
  conn.release();
});

// Itineraries
// return all itineraries from all users
app.get("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.getAllItineraries(conn, req, res);
  conn.release();
});

// create new itinerary
app.post("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.createItinerary(conn, req, res);
  conn.release();
});

// update existing itinerary
app.post("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.updateItinerary(conn, req, res);
  conn.release();
});

// delete itinerary
app.delete("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.deleteItinerary(conn, req, res);
  conn.release();
});

// Events
// get events
app.get("/events", async (req, res) => {
  const conn = await pool.getConnection();
  eventController.getAllEvents(conn, req, res);
});

// file upload
app.post("/upload", upload.single("img"), (req, res) => {
  postImagesController.uploadImage(req, res);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
