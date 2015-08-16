
/*require('fs').readFile("largeFile.txt", {encoding : "utf8"}, function(err, contents){
        if (err){
            console.log(err);
            return;
        }
        console.log(contents);
        console.log("================ done =============");
    });*/

var fs = require("fs");

/*var stream = fs.createReadStream("largeFile.txt", {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
    console.log(chunk);
    ++readCount;
});
stream.on('end', function(){
    console.log("================ done ============= with " + readCount + " reads");
});*/

var stream = fs.createReadStream("largeFile.txt")
stream.on('end', function(){
    console.log("================ done =============");
})
stream.pipe(process.stdout);
