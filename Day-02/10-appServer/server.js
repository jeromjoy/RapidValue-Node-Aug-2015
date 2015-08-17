var http = require('http');
var path = require('path');
var dataProcessor = require('./dataProcessor');
var staticResourceServer = require('./staticResourceServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFound = require('./notFound');
var app = require('./app');

app.use(dataProcessor);
app.use(staticResourceServer(path.join(__dirname, '/public')));
app.use(calculatorProcessor);
app.use(notFound);

var server = http.createServer(app());

server.listen(8080);
console.log('Server listening on port 8080 for resources at ', __dirname);
