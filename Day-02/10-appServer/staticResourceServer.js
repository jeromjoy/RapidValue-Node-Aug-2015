var fs = require('fs');
var path = require('path');

var staticResourceExtns = [".html",".jpg",".png",".ico",".js",".css"];
function isStatic(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

function serveStatic(req, res, next){
    var resourceName = req.url.pathname;
     if (isStatic(resourceName)){
        var resourcePath = path.join(__dirname, resourceName);
        if (fs.existsSync(resourcePath)){
            //fs.createReadStream(resourcePath).pipe(res);
            var stream = fs.createReadStream(resourcePath);
            stream.on('data', function(chunk){
                console.log('writing some data to the response');
                res.write(chunk);
            })
            stream.on('end', function(){
                res.write('end');
                console.log('completed serving static resource');
            });
        } else {
            next();
        }
    }
}

module.exports = serveStatic;
