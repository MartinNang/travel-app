import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";
import mariadb from "mariadb";

const app = express();
import * as itineraryController from "./server/controllers/itineraryController.js";
import * as userController from "./server/controllers/userController.js";
import {
  deleteItinerary,
  updateItinerary,
} from "./server/services/itineraryService.js";
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

// return all users
app.get("/users", async (req, res) => {
  const conn = await pool.getConnection();
  userController.getAllUsers(conn, req, res);
});

// check if user exists
app.get("/login", async (req, res) => {
  const conn = await pool.getConnection();
  userController.findUser(conn, req, res);
});

// create new user
app.post("/signup", async (req, res) => {
  const conn = await pool.getConnection();
  userController.findUser(conn, req, res);
});

// update profile name
app.put("/users/:userId/profileName", async (req, res) => {
  const conn = await pool.getConnection();
  userController.updateProfileName(conn, req, res);
});

// update profile image
app.put("/users/:userId/profileImage", async (req, res) => {
  const conn = await pool.getConnection();
  userController.updateProfileImage(conn, req, res);
});

// delete user
app.delete("/users/:userId", async (req, res) => {
  const conn = await pool.getConnection();
  userController.deleteUser(conn, req, res);
});

// return all itineraries from all users
app.get("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.getAllItineraries(conn, req, res);
});

// return all itineraries from one user
app.get("/users/:userId/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.findItinerariesByUserId(conn, req, res);
});

// create new itinerary
app.post("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.createItinerary(conn, req, res);
});

// update existing itinerary
app.post("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.updateItinerary(conn, req, res);
});

// delete itinerary
app.delete("/itineraries", async (req, res) => {
  const conn = await pool.getConnection();
  itineraryController.deleteItinerary(conn, req, res);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
