var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var calculator = require('./calculator');

var staticResourceExtns = [".html",".jpg",".png",".ico",".js",".css"];
function isStatic(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    var resourceName = urlObj.pathname;
    if (isStatic(resourceName)){
        var resourcePath = path.join(__dirname, resourceName);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (urlObj.pathname === '/calculator'){
            var data = urlObj.query;
            var result =calculator[data.operation](parseInt(data.n1, 10), parseInt(data.n2),10);
            res.write(result.toString());
            res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('Server listening on port 8080 for resources at ', __dirname);

///calculator?operation=add&n1=100&n2=200

