//config
const { viewTemplate, stylesTemplate } = require("../configs/configs");
//runingServer = server;
const frontEndServer = async (req, res) => {
  try {
    if (req.url === "/" && req.method === "GET") {
      const html = await viewTemplate("home.html");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`${rootHtml}`);
    }
    console.log("serving routes");
  } catch (error) {
    throw Error(error);
  }
};
module.exports = frontEndServer;
