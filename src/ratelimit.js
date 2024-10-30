import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 5, // max req 5
  status: 429,
  message: "Too many request, try again after 10 seconds", // message limiter
});

export default limiter;
