// crud for notes
// routes wrapped in fnc

// create route
module.exports = function (app, db) {
  // create note here
  app.post("/notes", (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection("notes").insert(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(result.ops[0]); // send first element in array back
      }
    });
    // callback is executed when /notes is called
  });
};
