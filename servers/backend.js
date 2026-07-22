const http = require("http");
const backendServer = http.createServer();

backendServer.listen(5000, () => {
  console.log("backend vjs server runing on port 500");
});

process.on("uncaughtException", (error) => {
  console.error("vjs backend encounted :", error);
});
