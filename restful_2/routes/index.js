// master route file
const routes = require("./routes");

module.exports = function (app, db) {
  routes(app, db); // export here to import in server.js
};
