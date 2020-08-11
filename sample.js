const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("read.txt", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  })
  .listen(8081);
