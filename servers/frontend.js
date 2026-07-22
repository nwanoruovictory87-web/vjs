const http = require("http");
const frontEndServer = http.createServer();
//config
const { viewTemplate, stylesTemplate } = require("../configs/configs");
//runingServer = server;
frontEndServer.addListener("request", async (req, res) => {
  try {
    if (req.url === "/" && req.method === "GET") {
      const rootHtml = await viewTemplate("home.html");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`${rootHtml}`);
    }
    console.log("serving vjs");
  } catch (error) {
    throw Error(error);
  }
});
frontEndServer.listen(3000, () => {
  console.log("frontEndServer vjs up and runing on port 3000");
});

process.on("uncaughtException", (error) => {
  console.error("vjs frontend encounted :", error);
});
