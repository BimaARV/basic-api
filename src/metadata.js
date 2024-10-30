import moment from "moment"; 

let requestCount = 0;

const metadataMiddleware = (req, res, next) => {
  requestCount++;

  const metadata = {
    status: 200,
    message: "OK",
    name: `Simple ${process.env.api}`,
    timestamp: moment().format("YYYY-MM-DD | HH:mm:ss"),
    requestCount,
    getUrl: req.originalUrl,
    headers: {
      host: req.headers.host,
      "user-agent": req.headers["user-agent"],
    },
  };

  res.json(metadata); 
};

// Ekspor middleware
export default metadataMiddleware;
