const http = require("http");
const frontendServer = require("./servers/frontend");
const backendServer = require("./servers/backend");
const { readFile } = require("fs");
const intercepterServer = http.createServer();

intercepterServer.addListener("request", async (req, res) => {
  try {
    if (req.url === "/") {
      frontendServer(req, res);
    }
  } catch (error) {
    throw Error(error);
  }
});

intercepterServer.listen(8000, () => {
  console.log("vjs req intercepter runing on port 8000");
});
process.on("uncaughtException", (error) => {
  console.error("vjs encounted :", error);
});
