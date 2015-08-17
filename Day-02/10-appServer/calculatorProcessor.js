var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res, next){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
            var data = req.url.query;
            var result =calculator[data.operation](parseInt(data.n1, 10), parseInt(data.n2),10);
            res.write(result.toString());
            res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
            var rawData = '';
            req.on('data', function(chunk){
                rawData += chunk;
            });
            req.on('end', function(){
                var data = qs.parse(rawData);
                var result =calculator[data.operation](parseInt(data.n1, 10), parseInt(data.n2),10);
                res.write(result.toString());
                res.end();
            });
    } else {
        next();
    }
}
