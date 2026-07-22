const http = require("http");
const frontendServer = require("./servers/frontend");
const backendServer = require("./servers/backend");
const { readFile } = require("fs");
const intercepterServer = http.createServer();

intercepterServer.addListener("request", async (req, res) => {
  try {
    if (req.url === "/") {
      const conectFrontend = await fetch(`http://localhost:3000${req.url}`, {
        method: `${req.method}`,
      });
      const file = (await conectFrontend.blob()).text().then((e) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`${e}`);
      });
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
