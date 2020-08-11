const fs = require("fs");

// asyncronouss
// callback function
fs.unlink("./toBeDeleted.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done async");
  }
});
console.log("do next step after delete");

// runs whatever it can run
// then shows errors
fs.writeFile("./Demo.txt", "Hello", (err) => {
  // override content
  if (err) {
    console.log(err);
  } else {
    console.log("Finished");
  }
});

fs.appendFile("./Demo.txt", " additional text", (err) => {
  // adds additional content
  if (err) {
    console.log(err);
  } else {
    console.log("Done");
  }
});

fs.readFile("./Demo.txt", "utf8", (err, data) => {
  // this is some text
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
