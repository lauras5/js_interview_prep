// crud for notes
// routes wrapped in fnc
module.exports = function (app, db) {
  app.get("/other", (req, res) => {
    res.send("this is another page");
  });
};
