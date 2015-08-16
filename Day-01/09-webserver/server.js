var http = require('http');
var fs = require('fs');
var path = require('path');

var staticResourceExtns = [".html",".jpg",".png",".ico",".js",".css"];
function isStatic(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
    var resourceName = req.url;
    if (isStatic(resourceName)){
        var resourcePath = path.join(__dirname, req.url);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        /*
        1. parse the url using url.parse with query parsing option(do a require('url'))
        2. if urlObj.pathname === '/calculator'
            perform calculation & return result
           else
            res.statusCode = 404;

        */
    }
});
server.listen(8080);
console.log('Server listening on port 8080 for resources at ', __dirname);

/calculator?operation=add&n1=100&n2=200

