const fs = require("fs");

// delete functionality
// syncronous
// try {
//   fs.unlinkSync("./toBeDeleted.txt");
// } catch (err) {
//   console.error(err);
// } finally {
//   console.log("done sync delete");
// }
// goes in order and stops at spot

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

// read file functionality
// syncronously
// async
// fs.readFile("./read.txt", "utf8", (err, data) => {
//   // this is some text
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// convert to readable data

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

// let contents = fs.readFileSync("./Another.txt", {
//   encoding: "utf8",
//   flag: "r",
// });
// console.log(contents);
