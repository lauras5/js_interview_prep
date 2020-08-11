const http = require("http");
// let url = require("url");
let fs = require("fs");
// url localhost:8080/?animals=giraffe

http
  .createServer((req, res) => {
    fs.readFile("demoFile.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
    // read url req params
    // let q = url.parse(req.url, true).query;
    // let text = q.animals;
    // res.end(text); // output giraffe
  })
  .listen(8080);

// CREATE
fs.writeFile("newFile.txt", "This is some text!", (err) => {
  if (err) throw err;
  console.log("New file created!");
});
