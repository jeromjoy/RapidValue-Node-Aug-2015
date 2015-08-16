var http = require('http');
var fs = require('fs');

//path.join(__dirname, req.url)
//res.statusCode = 404;
//res.end();
var server = http.createServer(function(req, res){
    console.log('a new connection is established for ', req.url, fs.existsSync(req.url));
    res.write('<h1>Welcome to node.js</h1>');
    res.end();
});
server.listen(8080);
console.log('Server listening on port 8080 for resources at ', __dirname);
