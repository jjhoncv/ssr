#!/usr/bin/env nodejs
var app = require('http').createServer(handler)

function handler (req, res) {

  var defaults = 'index.html';
  if(req.url !== '/'){
    defaults = req.url;
  };

  fs.readFile(__dirname + '/' + defaults, function (err, data) {
    var contentType = 'html';
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    if(req.url.indexOf('.js')!==-1){
      contentType = 'javascript';
    }
    if(req.url.indexOf('.css')!==-1){
      contentType = 'css';
    }
    
    res.writeHead(200, {'Content-Type': 'text/' + contentType});
    res.end(data, 'utf-8');
  });
}

app.listen(8080, '162.243.217.204');

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World 88\n');
}).listen(8080, '162.243.217.204');*/
//console.log('Server running at http://162.243.217.204:8080/')
