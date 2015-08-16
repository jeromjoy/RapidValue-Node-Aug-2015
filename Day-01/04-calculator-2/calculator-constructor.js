/*
    create a calculator object that has the following methods
        - add(x)
        -subtract(x)
        -multiply(x)
        -divide(x)
        -getResult()
    use all the methods with some sample values and print the result
    */
function Calculator(){
    var result = 0;
    this.add = function(x){
        result += x ;
    };
    this.subtract = function(x){
        result -= x ;
    };
    this.multiply = function(x){
        result *= x;
    };
    this.divide = function(x){
        result /= x;
    };
    this.getResult = function(){
        return result;
    };
}
module.exports = Calculator;

