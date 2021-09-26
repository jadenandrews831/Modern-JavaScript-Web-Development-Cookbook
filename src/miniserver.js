/* @flow */

"use strict";

(function IIFE(){
  console.log("Hello!");
})();

const http = require("http");
http.createServer((req, res)=> {
  res.writeHead(200, { "Content-Type": "text/plain"});
  res.end("Server alive!");
}).listen(8080, "localhost");

console.log("Mini server ready at http://localhost:8080/");
