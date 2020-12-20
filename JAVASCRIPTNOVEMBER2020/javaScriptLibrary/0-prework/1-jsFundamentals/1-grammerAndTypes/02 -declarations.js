
/*
VARIABLES

*/


//What is a variable? Like a bucket you can put things in or take things out
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variable;
//1) a variable must begin with a letter, underscore, or $ sign
//2) numbers may follow the above characters, but cannot come first. can do 1a, but can do a1
//3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENTS
*/
/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x); //undefined

x = 10;
console.log('Initialization 1:' , x); //10

x = 33;
console.log('Assignment 1;' , x);  //33

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'your are my dog';
console.log(y);

/*
var, Let and Const:

Var - 'old' keyword for variables
Let = 'new' keyword for variables
Const = also 'new', declares unchangeable variable

*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

elevenFifty = 'super!'; //above elevenFifty was const assigned Amazing so can't be changed




