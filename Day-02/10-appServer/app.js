var _middlewares = [];

function app(){
    return function(req, res){
        function run(req, res, fns){
            var first = fns[0],
                remaining = fns.slice(1);
            var next = function(){
                run(req, res, remaining);
            };
            if (first)
                first(req, res, next);
        }
        run(req, res, _middlewares);
    }
}

app.use = function(middleware){
    _middlewares.push(middleware);
}

module.exports = app;
