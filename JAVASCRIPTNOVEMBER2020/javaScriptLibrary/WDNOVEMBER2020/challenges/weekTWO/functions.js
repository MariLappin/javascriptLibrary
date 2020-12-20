/*
FUNCTIONS:
Javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression

Function declarations are hoisted in our code, and run ONLY when we call them(invoke them)
So any functioin in our code sits and waits to be ran until we call it by name. Think of
it as a student with his or her hand up, waiting to ask a question. That student does not ask the questin until the teacher calls upon them

-function expressions are not hoisted and are generally stored in variable.

-functions wihout names are known as anonymour functions

*/

//Function Declaration

function sayHello() {
    console.log('Hi');
}

sayHello();
//parenthesis invokes the function


//Function Expression - functions stored inside of variables

let greetings = function () {
     console.log("Hello");
}

greetings();

/*
PARAMETERS

Think of parameter as a newly declared variable that we have not given a value to yet
  -The value that we pass into our function when we call the function to run(known as an argument), is the
  value that gets assigned to the parameter

  General naming convention for function parameters; the parameter should be named something related to the
   informatioin we're passing into the function. If we're passing in an integer, we name our parameter num or
   number

*/

function myDog (husky) {    //husky can only be used inside the curly braces. invoking the myDog makes husky the placeholder for any value
    console.log(`My dogs nme is ${husky}`);         
}
myDog('Princess');  //Princess is the argument

function allMyDogs(smallHusky, bigHusky, borderCollie) {
console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);

}

allMyDogs('Mira', 'Luna', 'Charlie');

/*
RETURN

-functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3) //rounds to the nearest integer
    return average;                           //anything after the return does not get executed
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
ARROW FUNCTIIONS

-Arrow functions AKA FAT arrow function, were introduced in ES6. They are basically a more concise way
to write function expressions - NOT declarations
  -This means that arrow functions do NOT get hoisted

  -There are two types of arrow functiions: concise body and block body
    - The return happens automatically with a concise body function arro function
    - The return does not happen automatically with a nlock body arrow function

    - 
*/

//CONCISE BODY
let speak = (name) => console.log(`${name} goes wooooof`);
speak("Luna");

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner('Donovan", "Triplett');
console.log(fullName);

//BLOCK BODY

let speak = (name) => {
    console.log(`${name} goes wooooof`);

}
 let nameJoiner = (first, last) => {
   return `${first} ${last}`;
 }

 let fullName = nameJoiner('Donovan", "Triplett');
console.log(fullName);

//Write a function that takes two parameters (Length and Width) that returns
//the area of the rectangle
//Create a variable named area1 and area2 that will call the Function and store
//its return
//console.log the variables
//Example: 4 by 8 rectangle will give 32


function rectangleArea{
  let area =   width * height; 
  return area;
} 

let area1 = rectangleArea(2, 4);
let area2 = rectangleArea(5, 6);

console.log(area1);
console.log(area2);

//PRACTICE II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function dogToHumanYearConverter(dogAge){
    let humanAge = (dogAge - 2) * 4 + 21;
        return humanAge:
}

console.log(dogToHumanYearConverter)(-7);







