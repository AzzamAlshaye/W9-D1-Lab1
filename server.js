// server.mjs
import { createServer } from "node:http";
import fs from "fs";

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>`;

const imgFile = fs.readFileSync("./Image.png");
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "image/png" });
  //Location:"https://www.youtube.com/"
  res.end(imgFile);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
