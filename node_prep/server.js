// require all deps
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require(".config/db");
// instance of express fw
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true })); // process encoded


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require("./app/routes")(app, database); // import route into server
  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
