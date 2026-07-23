const { FULLDOM, DOMTEMPLATE } = require("../../configs/configs");
async function clientsRoutes(req, res) {
  try {
    if (req.url === "/") {
      const head = await DOMTEMPLATE.headsTemplate(["head.html"]);
      const style = await DOMTEMPLATE.stylesTemplate(["global.css"]);
      const body = await DOMTEMPLATE.bodyTemplate(["navigationBar.html"]);
      const script = await DOMTEMPLATE.scriptsTemplate();
      const html = await FULLDOM(head, style, body, script);
      res.end(`${html}`);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("unknown req path");
    }
  } catch (error) {
    process.stderr.write(`vjs clientsRoustes encounted errors ${error}`);
  }
}
module.exports = { clientsRoutes };
