//config
const {
  headsTemplate,
  stylesTemplate,
  bodyTemplate,
  scriptsTemplate,
  FULLDOM,
  DOMTEMPLATE,
} = require("../configs/configs");
//runingServer = server;
const frontEndServer = async (req, res) => {
  try {
    if (req.url === "/" && req.method === "GET") {
      const body = `${await bodyTemplate("navigationBar.html")}`;
      const test = await DOMTEMPLATE.bodyTemplate(["navigationBar.html"]);
      const html = await FULLDOM(
        await headsTemplate("head.html"),
        await stylesTemplate("global.css"),
        test,
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
