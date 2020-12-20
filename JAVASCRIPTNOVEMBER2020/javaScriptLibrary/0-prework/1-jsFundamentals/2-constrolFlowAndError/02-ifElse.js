/*
IF ELSE CONDITIONAL
*/

let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
}else {
    console.log('no jacket necessary!');
}

//you can blend complex conditionals and i-else statements based upon your need

if(weather>70 && typeof weather === 'number'){
  console.log('this weather is amazing!');
} else {
  console.log('either the temperature is cool, the variable is not a string, or both');
}

/*
ELSE-IF
*/

let age = 17;

if (age >= 25){
    console.log('yay! you can rent a car');
} else if(age >= 21){
    console.log('yay! you can drink!');
} else if(age >= 18){
    console.log('yay! you can vote!');
} else {
    console.log("sorry, you are too young to do anything fun.  :(");
}