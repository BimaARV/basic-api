import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 1000, // 15 seconds
  max: 5, // 5 request maximume in 15 seconds
  status: 429,
  message: 'Too many request, try again after 15 seconds',
});

export default limiter