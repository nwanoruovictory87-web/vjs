const http = require("http");
const frontendServer = require("./client/frontend");
const backendServer = require("./servers/backend");
const intercepterServer = http.createServer();

intercepterServer.addListener("request", async (req, res) => {
  try {
    if (req.url.includes("//") && req.url.split("//")[0] === "") {
      backendServer(req, res);
    } else {
      frontendServer(req, res);
    }
  } catch (error) {
    throw Error(error);
  }
});

intercepterServer.listen(8000, () => {
  console.log("vjs intercepter runing on port 8000");
});
process.on("uncaughtException", (error) => {
  console.error("vjs encounted :", error);
});
