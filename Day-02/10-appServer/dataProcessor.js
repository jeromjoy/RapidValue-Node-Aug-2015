var url = require('url');
function dataProcessor(req, res, next){
    req.url = url.parse(req.url, true);
    next();
}
module.exports = dataProcessor;
