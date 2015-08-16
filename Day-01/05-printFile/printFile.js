var fs = require("fs");

/*

try {
    var contents = fs.readFileSync("test.txt", {encoding : "utf8"});
    console.log(contents);
} catch (err){
    console.log("file not found");
} finally {
    console.log("done");
}
*/

try {
    fs.readFile("test1.txt", {encoding : "utf8"}, function(err, contents){
        console.log(contents);
    });
} catch (err){
  console.log("file not found");
} finally {
    console.log("done");
}

