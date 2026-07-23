//config
const { FULLDOM, DOMTEMPLATE } = require("../configs/configs");
//runingServer = server;
const frontEndServer = async (req, res) => {
  try {
    if (req.url === "/" && req.method === "GET") {
      const head = await DOMTEMPLATE.headsTemplate(["head.html"]);
      const style = await DOMTEMPLATE.stylesTemplate(["global.css"]);
      const body = await DOMTEMPLATE.bodyTemplate(["navigationBar.html"]);
      const script = await DOMTEMPLATE.scriptsTemplate();
      const html = await FULLDOM(head, style, body, script);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`${html}`);
    }
    console.log("serving routes");
  } catch (error) {
    throw Error(error);
  }
};
module.exports = frontEndServer;
