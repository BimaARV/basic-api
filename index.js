import express from "express";
import dotenv from "dotenv";
import limiter from "./src/ratelimit.js";
import metadata from "./src/metadata.js";
import { statusMiddleware, badRequestHandler } from "./src/status.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT;
const name = process.env.NAME;

// limiter
app.use(limiter);

// homepage api
app.get("/", (req, res) => {
  res.send(`Hello ${name}! | PORT ${port}`);
});

// metadata
app.get("/metadata", metadata);


// bad request handler & middleware
app.get("/status", statusMiddleware);
app.use(badRequestHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
