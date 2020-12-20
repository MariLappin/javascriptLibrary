/*
TYPES

*/

//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);
//The above is declared but not initialized so it will come up as undefined

//Null
/*
Null means a variable has been declared and assigned a value of null. Where undefined usually means the value has been forgotten to be defined. Empty is on purpose. Undefined are 
unintentional (like an empty gift box)
*/
var empty = null;
console.log(empty);

//Numbers

let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 99999999999;
console.log(precise);

//JS can handle some pretty large digits

let rounded = 9999999999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
let third = 1050 + '100';
console.log(third);
console.log(first);
console.log(second);
console.log(typeof third);
//When + sign has numbers on either side, it adds them. When + sign has number in quotations, it string them together. If its one of both, it strings them together.

//Interpolation
//lets you use strings with dynamic content (they require backticks)

//Example 1:
let age = 60;
let string = `my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values (it can hold multiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), separated with a colon, each key value pair is separated by a comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}
console.log(hulk); 

console.log(hulk.age);
console.log(typeof hulk);

//Arrays
/*
Arrays stores multiple values in an ordered way. They, too, hold multiple data types.

Denoted by []
Has values ('blue', 'green', 'yellow') separated by commas

*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush','brush', 'clean toothbrush']
//array indexing             0                    1                    2             3        4
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);
















    











        