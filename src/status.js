import moment from "moment";
let requestCount = 0;

const formatUptime = (uptime) => {
  const seconds = Math.floor(uptime % 60);
  const minutes = Math.floor((uptime / 60) % 60);
  const hours = Math.floor((uptime / 3600) % 24);
  return `${hours}h ${minutes}m ${seconds}s`;
};

const statusMiddleware = (req, res) => {
    requestCount++;
  const UptimeSeconds = process.uptime();

  const status = {
    status: 200,
    message: "OK",
    uptime: formatUptime(UptimeSeconds),
    timestamp: moment().format("YYYY-MM-DD | HH:mm:ss"),
    requestCount: requestCount,
  };
  res.json(status);
};

const badRequestHandler = (req, res) => {
  res.status(400).json({
    status: 400,
    message: "Bad Request",
  });
};

export { statusMiddleware, badRequestHandler };
