const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {

  res.writeHead(200, { 'content-type': 'text/html'});
  // res.end('Hello, World!');
  fs.createReadStream('information.html').pipe(res);
}

const server = http.createServer(requestListener);
console.log("hello ");
server.listen(3000);