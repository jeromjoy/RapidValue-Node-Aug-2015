var url = require('url');
var qs = require('querystring');

function dataProcessor(req, res, next){
    req.url = url.parse(req.url, true);
    req.body = {};
    req.field = function(name){
        return req.body[name] || req.url.query[name]
    };
    if (req.method === 'POST') {
         var rawData = '';
            req.on('data', function(chunk){
                rawData += chunk;
            });
            req.on('end', function(){
                req.body = qs.parse(rawData);
                next();
            });
    } else {
        next();
    }
}
module.exports = dataProcessor;
