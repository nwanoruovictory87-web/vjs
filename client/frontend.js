//runingServer = server;
const frontEndServer = async (req, res) => {
  try {
    //routes
    const { clientsRoutes } = require("./routes/routes");
    clientsRoutes(req, res);
  } catch (error) {
    throw Error(error);
  }
};
module.exports = frontEndServer;
