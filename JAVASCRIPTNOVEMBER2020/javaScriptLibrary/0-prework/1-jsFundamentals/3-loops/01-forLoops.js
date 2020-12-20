/*
LOOPS

forLoops


//Loops offer a quick and easy way to do something repeatedly
//There are many different kinds of loops but they all fo roughly the same thing;

 for statement
 do while
 while
 labeled
 break
 continue
 for in
 for of
 .forEach, 
 .map

//loop structure:
a) creation of an indexing variable 
b) a run condition 
c) change to the indexing variable

//count to 10 from 0 and log the numbers:
*/
for (let i = 0; i<= 10; i++){
    console.log(i);
}

//loops can run infinitely

//counts to -25 by -3, starting from 2, logs the numbers

for (let  i=2; i>=-25; i = i - 3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//use square bracket for string 'kincade'
//for loops can use lots of variables

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

// for (let i = 0; i<= 10; i++){
//     console.log(i);
// }

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (i = 0; i <alphabet.length; i++) {
       console.log(alphabet[i]);
}

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let i = 'string';
for (i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

//do a loop that counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >=-25; i = i-3){
    console.log(i);
}

//display the letters in a name individually

let name = 'Kinkade';
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//square brackets [] treats variable as an array even though its a string

//loops can use lot of variables:

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

//add all numbers between 2 integers

let a = 37
let b = 77



const sumAll = arr => {

const startNum = arr[0];
const endNum = arr[1];
const numCount = Math.abs(startNum - endNum) +1;
const sum = ((startNum = endNum) * numCount) /2;
return sum;
};

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([1, 4]);
