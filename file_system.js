let fs = require("fs");
// Use fs.readFile() method to read the file
fs.readFile("Demo.txt", "utf8", function (err, data) {
  // Display the file content
  let found = false;
  let count = 0;

  if (data == "") {
    console.log("file is empty.");
    return;
  }

  let split = data.split(" ");

  split.forEach((word) => {
    //
    if (word == "demo") {
      found = true;
      count++;
    }
  });

  let multiple = count > 1 ? "s." : ".";

  console.log(
    `Found=${found}, The word 'demo' was found in the sentence -> "${data}" ${count} time${multiple}`
  );
  // console.log(data);
});

console.log("readFile called");
