import moment from "moment";
import UserAgentParser from "user-agent-parser";

let requestCount = 0;

const metadataMiddleware = (req, res, next) => {
  requestCount++;

  const userAgent = req.headers["user-agent"];
  const parserUserAgent = UserAgentParser(userAgent);
  const os = parserUserAgent.os;

  const metadata = {
    status: "200",
    message: "OK",
    timestamp: moment().format("YYYY-MM-DD | HH:mm:ss"),
    requestCount,
    getUrl: req.originalUrl,
    headers: {
      host: req.headers.host,
      connection: req.headers.connection,
      "user-agent": userAgent,
      accept: req.headers.accept,
    },
    os: {
      name: os.name || "Unknown OS",
      version: os.version || "Unknown Version",
    },
  };
  res.json(metadata);
};

export default metadataMiddleware;
