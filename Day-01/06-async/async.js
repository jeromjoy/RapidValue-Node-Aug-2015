function add(x,y){
    if (x === 0 || y === 0)
        throw new Error("invalid arguments");
    return x + y;
}

function addClient(x,y){
    try{
        var result = add(x,y);
        console.log("result = ", result);
    } catch (e){
        console.log("something went wrong");
    }
}
module.exports.addClient = addClient;



function addAsync(x,y,onResult){
    setTimeout(function(){
        if (x === 0 || y === 0){
            var err = new Error("invalid arguments");
            onResult(err, null);
            return;
        }
        onResult(null, x + y);
    },4000);
}

/*
function addClientAsync(x,y){
    try{
        addAsync(x,y, function(result){
            console.log("result = ", result);
        });
    } catch (e){
        console.log("something went wrong");
    }
}
*/

function addClientAsync(x,y){
    addAsync(x,y, function(err, result){
        if (err){
            console.log('something went wrong');
        } else {
            console.log("result = ", result);
        }
    });
}

module.exports.addClientAsync = addClientAsync;


