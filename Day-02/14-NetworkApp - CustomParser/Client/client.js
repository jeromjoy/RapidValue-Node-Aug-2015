var net = require("net");
var MessageParser = require("./MessageParser");


var socket = net.connect(8080);
socket.setEncoding("utf8");
socket.on('data', function(chunk){
     var message = JSON.parse(chunk);
    if (message.type === 'watching'){
        console.log('The server has started watching the file');
    } else if (message.type === 'change'){
        console.log('The file has changed at ' + message.timestamp);
    }
})
/*
var parser = new MessageParser(socket);
parser.on("watching", function(filename){
    console.log("watching for file " + filename);
});
parser.on("change", function(filename){
    changeCount[filename] = (changeCount[filename] || 0) + 1;
    console.log(filename + " changed " + changeCount[filename] + " times");
})
parser.on("error", function(err){
    console.log(err);
});
*/
