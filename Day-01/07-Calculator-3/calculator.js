/*
    create a calculator object that has the following methods
        - add(x)
        -subtract(x)
        -multiply(x)
        -divide(x)
        -getResult()
    use all the methods with some sample values and print the result
    */

var result = 0;
var calculator = {
    add : function(x){
        result += x ;
    },
    subtract : function(x){
        result -= x ;
    },
    multiply : function(x){
        result *= x;
    },
    divide : function(x){
        result /= x;
    },
    getResult : function(){
        return result;
    }
};
module.exports = calculator;
