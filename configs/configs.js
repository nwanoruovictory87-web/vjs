const fsPromise = require("fs").promises;
const viewTemplate = async (path) => {
  try {
    const view = await fsPromise.readFile(`./routes/${path}`, "utf-8");
    return view;
  } catch (error) {
    throw Error(error);
  }
};
const stylesTemplate = async (path) => {
  try {
    const styles = await fsPromise.readFile(`./styles/${path}`, "utf-8");
    return styles;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { viewTemplate, stylesTemplate };
