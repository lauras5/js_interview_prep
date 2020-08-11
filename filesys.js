let fs = require("fs");

// read file
fs.readFile("Another.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// add to file
fs.appendFile("Another.txt", ". This is more text", (err) => {
  if (err) throw err;
  console.log("Successfully added more text to file!");

  // read updated file
  fs.readFile("Another.txt", "utf8", (e, data) => {
    if (e) throw e;
    console.log(data);
  });
});

// write to file
// if file doesn't exist, it will create new file.
fs.writeFile("./newFile.txt", "Nice to meet you.", (err) => {
  if (err) throw err;
  console.log("Successfully added new file");

  // read new file on success
  fs.readFile("newFile.txt", "utf8", (e, data) => {
    if (e) throw e;
    console.log(data);
  });
});
