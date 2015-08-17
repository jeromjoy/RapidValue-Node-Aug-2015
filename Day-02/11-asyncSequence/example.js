function f1(next){
    console.log("f1 is triggered");
    setTimeout(function(){
        console.log("f1 completed");
        next();
    }, 3000)
}
function f2(next){
    console.log("f2 is triggered");
    setTimeout(function(){
        console.log("f2 completed");
        next();
    }, 3000)
}
function f3(next){
    console.log("f3 is triggered");
    setTimeout(function(){
        console.log("f3 completed");
        next();
    }, 3000)
}
function f4(next){
    console.log("f4 is triggered");
    setTimeout(function(){
        console.log("f4 completed");
        next();
    }, 3000)
}





