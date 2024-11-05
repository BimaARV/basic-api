import moment from "moment";
let requestCount = 0;

const formatUptime = (uptime) => {
  const seconds = Math.floor(uptime % 60);
  const minutes = Math.floor((uptime / 60) % 60);
  const hours = Math.floor((uptime / 3600) % 24);
  return `${hours}H ${minutes}M ${seconds}S`;
};

const statusMiddleware = (req, res, next) => {
  requestCount++;
  const UptimeSeconds = process.uptime();

  const status = {
    status: "200",
    message: "OK",
    uptime: formatUptime(UptimeSeconds),
    timestamp: moment().format("YYYY-MM-DD | HH:mm:ss"),
    requestCount: requestCount,
  };
  res.json(status);
};


export default statusMiddleware;