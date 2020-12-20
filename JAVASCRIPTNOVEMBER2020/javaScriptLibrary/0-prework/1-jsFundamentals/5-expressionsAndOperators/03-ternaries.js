/*
TERNARIES

*/


let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative');
//is x greater that zero, log 'x is positive' else log x is negative
/*Above is same as below but more concise

    if (x > 0){
    console.log('x is positive');
  } else {
       console.log('x is negative');
}  
*/
let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 charachter!');
} else {
    console.log('what a normal greeting');
    }

//writing with a ternary

let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
  console.log('your greeting is exactly 10 characters');
} else {
console.log('what a normal greeting');
}

//write the above with a ternary


greeting.length > 10 ? console.log('that is a long greeting') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting');

// ? has the condition before it. conditions divided with :

