/*

ARROW FUNCTIONS

Functions can be made by a function declaration 
ie
*/
function coffee(){
    return 'coffee is good';
}

//normal function expression is an unnamed function. To call the function you console log the name of the variable
//ie
let tea = function(){
  return 'tea is healthy';  
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous (unnamed)
//arrow funtion expression

let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2))
console.log(animals (0,0));

//concise vs block body

//concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

//block body example

let bananas = x => {
    return `There are ${x} bananas`;

}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());



//how many total legs on 1 chicken, 2 cows and 4 pigs

function totalLegs(chickens, cows, pigs){
    return (chickens*2)+(cows*4)+(pigs*4)
}
console.log(totalLegs(1,2,3))



//area of a triangle

function areaOfATriangle(height, base){
   console.log((height * base)/2);
}
areaOfATriangle(5,7);



//area of a trapezoid

function areaOfTrapezoid(bOne, bTwo, height){
let area = ((bOne + bTwo)/2)*height;
console.log(area);
}
areaOfTrapezoid(1,2,3);


//function to add the sum of all the numbers between two numbers

function sumOfNumbers(startNum, endNum){
  let subTotal = 0;
  for (i = startNum; i <= endNum; i++){
  subTotal += i;
}
  return subTotal;
}


console.log(sumOfNumbers(1,100));


