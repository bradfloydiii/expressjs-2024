import express from "express";
import path from "path";
// import bodyParser from "body-parser";
// import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

import posts from "./routes/posts.js";
import users from "./routes/users.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // load environment variables for Node version < 20

const port = process.env.PORT || 8000;

const app = express();

// middlewares
// app.use(morgan("dev")); // using logger middleware instead
//app.use(bodyParser.json()); // deprecated for express.json()
app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

// static directory
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/api/posts", posts);
app.use("/api/users", users);

app.use(notFound);
app.use(errorHandler);

// start the server
app.listen(port, () => console.log(`\nExpressJS is running on port ${port}`));
