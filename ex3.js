var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  fs.createServer(__dirname + 'index.html').pipe(res);

}).listen(1377, '127.0.0.1');
