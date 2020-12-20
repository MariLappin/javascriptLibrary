/*
HOISTING


*/

//EXAMPLE 1:
console.log(scissore);
var scissors = 'blue';

//example 1 breakdown:
var scissors;   //gets hoisted to the top
console.log(scissors);
scissors = 'blue';   //the assignment happens later

//example 2

function hoistTest(){
    console.log(testVar);
    var testVar = 10
    console.log(testVar)   
}

hoistTest();

//example 2 breaksown:
function hoistTest():\{
  var testVar;                  //the variable test gets moved up
  console.log(testVar)
  testVar = 10;
  console.log(testVar);
  
}

hoistTest();

