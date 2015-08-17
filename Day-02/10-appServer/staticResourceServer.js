var fs = require('fs');
var path = require('path');

var staticResourceExtns = [".html",".jpg",".png",".ico",".js",".css"];
function isStatic(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}
var _baseDir = '';

function serveStatic(req, res, next){
    var resourceName = req.url.pathname;
     if (isStatic(resourceName)){
        var resourcePath = path.join(_baseDir, resourceName);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        next();
    }
}

module.exports = function(baseDir){
    _baseDir = baseDir;
    return serveStatic;
};
