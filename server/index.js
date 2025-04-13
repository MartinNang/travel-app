import express from "express";
import morgan from "morgan";
import cors from "cors";
import mariadb from "mariadb";
import multer from "multer";

const app = express();
import * as eventController from "./controllers/eventController.js";
import * as itineraryController from "./controllers/itineraryController.js";
import * as userController from "./controllers/userController.js";
import * as postImagesController from "./controllers/postImageController.js";
import path from "path";

// Routers
import { collaboratorRouter } from "./routes/collaboratorRoute.js";
import { eventRouter } from "./routes/eventRoute.js";
import { itineraryRouter } from "./routes/itineraryRoute.js";
import { itineraryTypeRouter } from "./routes/itineraryTypeRoute.js";
import { locationRouter } from "./routes/locationRoute.js";
import { postImageRouter } from "./routes/postImagesRoute.js";
import { postRouter } from "./routes/postRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1000 * 1000 },
});
const hostname = "nodejs_2425-cs7025-group1";
const port = 3000;
const project_name = "en route";

// Create a connection pool
export const pool = mariadb.createPool({
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

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

// file upload
app.post("/upload", upload.single("img"), (req, res) => {
  console.log("req", req.files);
  res.status(200).send(req.files);
});

// Collaborators
app.use("/collaborators", collaboratorRouter);

// Events
app.use("/events", eventRouter);

// Itineraries
app.use("/itineraries", itineraryRouter);

// Itinerary Types
app.use("/itineraryTypes", itineraryTypeRouter);

// Locations
app.use("/locations", locationRouter);

// Post Images
app.use("/postImages", postImageRouter);

// Posts
app.use("/posts", postRouter);

// Users
app.use("/users", userRouter);

// Images
app.get("/uploads/:image", function (req, res) {
  res.sendFile(path.join(__dirname, "/uploads/", req.params.image)); // find out the filePath based on given fileName
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export async function connect(controllerMethod) {
  let conn;
  try {
    conn = await pool.getConnection();
    controllerMethod(conn);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.release();
    }
  }
}
