// crud for notes
// routes wrapped in fnc
var ObjectID = require("mongodb").ObjectID;

module.exports = function (app, db) {
  // get note by id
  app.get("/notes/:id", (req, res) => {
    const id = req.params.id; // from params in url
    const details = { _id: new ObjectID(id) }; // req.params.id

    db.collection("notes").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(item); // send first element in array back
      }
    });
  }); // end get

  // update note
  app.put("/notes/:id", (req, res) => {
    const id = req.params.id; // from params in url
    const details = { _id: new ObjectID(id) }; // req.params.id
    const note = { text: req.body.body, title: req.body.title };

    db.collection("notes").update(details, note, (err, item) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(item); // send first element in array back
      }
    });
  }); // end get

  // delete note
  app.delete("/notes/:id", (req, res) => {
    const id = req.params.id; // from params in url
    const details = { _id: new ObjectID(id) }; // req.params.id

    db.collection("notes").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send("Note " + id + " deleted."); // send first element in array back
      }
    });
  }); // end get

  // create note
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
  }); // end add
};
