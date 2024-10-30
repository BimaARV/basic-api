import express from "express";
import dotenv from "dotenv";
import moment from "moment";
import rateLimit from "express-rate-limit";
import metadata from "./src/metadata.js";
import limiter from "./src/ratelimit.js";
import { statusMiddleware, badRequestHandler } from "./src/status.js";

dotenv.config();
const app = express();

app.use(express.json());

const api = process.env.api;
const port = process.env.PORT;

app.use(limiter);

app.get("/", (req, res) => {
  res.send(`Hello Selamat datang di ${api} akuu!`);
});

app.get("/metadata", metadata);

app.get("/status", statusMiddleware);

app.use(badRequestHandler)

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
