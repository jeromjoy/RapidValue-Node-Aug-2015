var fs = require("fs");
var calculator = require("./calculator");

fs.readFile("data.csv", {encoding : 'utf8'}, function(err, contents){
    if (err){
        console.log("something went wrong....");
        console.log(err);
        return;
    }
    var lines = contents.split('\n');
    lines.forEach(function(line){
        if (line){
            var fields = line.split(',');
            calculator[fields[0]](parseInt(fields[1]));
        }
    });
    console.log(calculator.getResult());
});
