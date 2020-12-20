
//HOISTING -vars and functions get hoisted




console.log(hello);    //console.log happens before the variable - returns undefined
var hello = 'hello';

function goodBya(){
    console.log('goodBye');
}

let name = "Rob";
console.log(name);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}


//SCOPE    GLOBAL SCOPE AND LOCAL SCOPE

var coffeeTupe = 'dark roast';      //Global variable - outside the function

function exampleFunction() {
    coffeeTupe = "vanilla roast";
    console.log(coffeeType);
}

exampleFunction();
console.log('Outside the function', coffeeType);

var x = "Rob";

function scope() {
    var x = "world";
    if (true == true) {
        var x = "Hello";
        console.log('From if statement', x);
    }
    console.log(From function", x);

}

scope();

console.log(x);("Outside the function", x);