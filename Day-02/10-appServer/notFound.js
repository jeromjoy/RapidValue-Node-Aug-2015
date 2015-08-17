module.exports = function(req, res, next){
    console.log('resource not found and hence sending 404');
    res.statusCode = 404;
    res.end();
}
