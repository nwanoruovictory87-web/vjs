const http = require("http");
const fs = require("fs");
const frontendServer = require("./client/frontend");
const backendServer = require("./server/backend");
//devTool restart server on close
const intercepterServer = http.createServer();
const path = require("path");
intercepterServer.addListener("request", async (req, res) => {
  try {
    if (req.url.includes("//") && req.url.split("//")[0] === "") {
      backendServer(req, res);
    } else if (req.method === "GET") {
      frontendServer(req, res);
    }
  } catch (error) {
    throw Error(error);
  }
});

intercepterServer.listen(8000, () => {
  process.stdout.write("vjs intercepter runing on port 8000 \n");
});
//listin for errors emited from the process
process.on("uncaughtException", (error) => {
  process.stderr.write(`vjs encounted : ${error} \n`);
});
