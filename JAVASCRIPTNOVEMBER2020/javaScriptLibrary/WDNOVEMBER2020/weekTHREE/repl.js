/*
Instructions from your teacher:
You only need to use the index.js file. If submitted prior to the due date, June 4th 2020, your instructor can provide feedback, allow you to update your code, and resubmit your solution.


1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2). 

2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below. 


*/

// function oddEven(let i = 0; i < 11; i++){
//     console.log(i)
// }
// for oddEven (); {
// if (i++=even return "this number is even");
// if (i++=odd return 'this number is odd');
// }

for (let index = 0; index <11; index++) {
    callBack(index)
    
}

function callBack(i) {
    if (i % 2 ===0) {
    console.log (`this number is ${i}`)
    console.log ('this number is even');    
    } 
    
    else {
    console.log (`this number is ${i}`) 
    console.log ('this number is odd');
    }
} 



const age = 3
console.log(`I'm ${age} years old!`)

/*
You only need to use the index.js file. If submitted prior to the due date, June 4th, your instructor can provide feedback, allow you to update your code, and resubmit your solution.


Write an object literal that stores information about your favorite movie. 

nameOfMovie, runTime, characters, and genre should be keys directly inside the object. 

characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items. 

items itself will also be an array that should store no more than two (2) item objects. 

These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}). 

Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.

*/
let movie = {
    movieName: 'Cinderella', 
    leadActress: 'Lily James', 
    leadActor: 'Patrick Dempsey',
    movieRating: 'G'
    movieDirector: 'Kenneth Branagh',
    runTime: '1 hour 54 minutes',
    movieGenre: 'fairytale',

};
console.log(movie.leadActress);

let movie = cinderellaMovie = {
    movieParts: 
        cinderella: 'Lily James', [age: '31', countryOfOrigin: 'England'];
        princeeCharming: 'Patrick Dempsey', [age: '54'. countryOfOrigin: 'United States'];
        wickedStepmother: 'Kate Blanchard'. [age: '51', countryOfOrigin: 'Australia'];
        
    movieInformation:

}
    