var http = require('http');
var dataProcessor = require('./dataProcessor');
var staticResourceServer = require('./staticResourceServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFound = require('./notFound');

var server = http.createServer(function(req, res){
    dataProcessor(req, res);
    staticResourceServer(req, res);
    calculatorProcessor(req, res);
    notFound(req, res);
});

server.listen(8080);
console.log('Server listening on port 8080 for resources at ', __dirname);
