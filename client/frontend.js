//config
const {
  headsTemplate,
  stylesTemplate,
  bodyTemplate,
  scriptsTemplate,
  FULLDOM,
} = require("../configs/configs");
//runingServer = server;
const frontEndServer = async (req, res) => {
  try {
    if (req.url === "/" && req.method === "GET") {
      const html = await FULLDOM(
        await headsTemplate("head.html"),
        await stylesTemplate("home.css"),
        await bodyTemplate("home.html"),
        await scriptsTemplate("home.js"),
      );
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`${html}`);
    }
    console.log("serving routes");
  } catch (error) {
    throw Error(error);
  }
};
module.exports = frontEndServer;
