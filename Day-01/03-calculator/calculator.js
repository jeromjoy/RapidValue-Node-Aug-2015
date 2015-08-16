/*
    create a calculator object that has the following methods
        - add(x,y)
        -subtract(x,y)
        -multiply(x,y)
        -divide(x,y)

    use all the methods with some sample values and print the result
    */

var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
    sign : function(x){
        return x < 0 ? -1 : x > 0 ?  1 : 0;
    }
};
module.exports = calculator;
