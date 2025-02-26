import user from "./models/user.js";
import * as userController from "./controllers/userController.js";
import itinerary from "./models/itinerary.js";
import * as itineraryController from "./controllers/itineraryController.js";
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

// TODO: Update profile image
/* app.put("/api/users/:userId/updateProfileImage", (req, res) =>
  userController.updateProfileImage(req, res)
);*/

// Delete user
app.delete("/api/users/:userId", (req, res) =>
  userController.deleteUser(req, res)
);

// Get all itineraries from all users
app.get("/api/itineraries", (req, res) =>
  itineraryController.getAllItineraries(req, res)
);

// Get all itineraries from all users
app.get("/api/itineraries/:email", (req, res) =>
  itineraryController.findItinerariesByUserEmail(req, res)
);

// Create itinerary from
app.post("/api/itineraries/:email", (req, res) =>
  itineraryController.createItinerary(req, res)
);

// Update itinerary (name, start date, end date and events)
app.put("/api/itineraries/:email", (req, res) =>
  itineraryController.updateItinerary(req, res)
);
// Delete itinerary using email and user

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
