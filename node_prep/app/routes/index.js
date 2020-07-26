// master route file
const noteRoutes = require("./note_routes");

module.exports = function (app, db) {
  noteRoutes(app, db); // export here to import in server.js
};
