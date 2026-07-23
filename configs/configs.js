const fsPromise = require("fs").promises;
// dom block for html body
const bodyTemplate = async (filename) => {
  try {
    const body = await fsPromise.readFile(
      `./client/views/${filename}`,
      "utf-8",
    );
    return body;
  } catch (error) {
    throw Error(error);
  }
};
// dom block for css
const stylesTemplate = async (filename) => {
  try {
    const styles = await fsPromise.readFile(
      `./client/styles/${filename}`,
      "utf-8",
    );
    return styles;
  } catch (error) {
    throw Error(error);
  }
};
// dom block for javaScript
const scriptsTemplate = async (filename) => {
  try {
    const scripts = await fsPromise.readFile(
      `./client/scripts/${filename}`,
      "utf-8",
    );
    return scripts;
  } catch (error) {
    throw Error(error);
  }
};
// dom head block
const headsTemplate = async (filename) => {
  try {
    const heads = await fsPromise.readFile(
      `./client/heads/${filename}`,
      "utf-8",
    );
    return heads;
  } catch (error) {
    throw Error(error);
  }
};
//full dom
const FULLDOM = async (heads, style, body, script) => {
  try {
    const documentObjectModel = `<!DOCTYPE html>
    <html lang="en">
    <head>${heads}</head>
    <style>${style}</style>
    <body>${body}</body>
    <script>${script}</script>
    </html>
    `;
    return documentObjectModel;
  } catch (error) {
    throw Error(error);
  }
};
module.exports = {
  headsTemplate,
  stylesTemplate,
  bodyTemplate,
  scriptsTemplate,
  FULLDOM,
};
