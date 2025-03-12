import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";
import mariadb from "mariadb";

const app = express();
import * as itineraryController from "./controllers/itineraryController.js";
import * as userController from "./controllers/userController.js";
import {
  deleteItinerary,
  updateItinerary,
} from "./services/itineraryService.js";
const hostname = "nodejs_2425-cs7025-group1";
const port = 3000;
const project_name = "en route";

// Use Morgan for logging HTTP requests
app.use(morgan("dev"));

app.use(express.json());

// Use CORS
app.use(cors());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello");
});

// return all users
app.get("/users", (req, res) => {
  const conn = pool.getConnection();
  userController.getAllUsers(conn, req, res);
});

// check if user exists
app.get("/login", (req, res) => {
  const conn = pool.getConnection();
  userController.findUser(conn, req, res);
});

// create new user
app.post("/signup", (req, res) => {
  const conn = pool.getConnection();
  userController.findUser(conn, req, res);
});

// update profile name
app.put("/users/:userId/profileName", (req, res) => {
  const conn = pool.getConnection();
  userController.updateProfileName(conn, req, res);
});

// update profile image
app.put("/users/:userId/profileImage", (req, res) => {
  const conn = pool.getConnection();
  userController.updateProfileImage(conn, req, res);
});

// delete user
app.delete("/users/:userId", (req, res) => {
  const conn = pool.getConnection();
  userController.deleteUser(conn, req, res);
});

// return all itineraries from all users
app.get("/itineraries", (req, res) => {
  const conn = pool.getConnection();
  itineraryController.getAllItineraries(conn, req, res);
});

// return all itineraries from one user
app.get("/users/:userId/itineraries", (req, res) => {
  const conn = pool.getConnection();
  itineraryController.findItinerariesByUserId(conn, req, res);
});

// create new itinerary
app.post("/itineraries", (req, res) => {
  const conn = pool.getConnection();
  itineraryController.createItinerary(conn, req, res);
});

// update existing itinerary
app.post("/itineraries", (req, res) => {
  const conn = pool.getConnection();
  itineraryController.updateItinerary(conn, req, res);
});

// delete itinerary
app.delete("/itineraries", (req, res) => {
  const conn = pool.getConnection();
  itineraryController.deleteItinerary(conn, req, res);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Create a connection pool
const pool = mariadb.createPool({
  host: "mariadb_2425-cs7025-group1",
  user: "2425-cs7025-group1",
  password: "jdgMm6VkTKTmhMv6",
  database: "2425-cs7025-group1_db",
  connectionLimit: 5,
});
