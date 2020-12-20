/*
ARRAYS

Arrays are used to store multiple values in a single variable
-there are array methods that allow us to traverse, as well as mutate, the date being
held in an array

-Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will
have an index of the array length -1

*/

let arr = ['This is the first element', 'This is the second element', 'This is the third element'];

console.log(arr[0]);

let test = new Array();   //creates an array object. Array class constructor. Just a number created an array with that many empty items inside it
test[0] = 'did it work?'
console.log(test);     //but if it's more than one item 4,5,6,7,8 it sees it as the array values

let boardGames = ['Monopoly', 'Clue', 'Risk', 'Candy Land', 'Catan'];

// for (let i = 0; i < boardGames.length; 1++){
//     console.log(boardGames[i]);
// }

//Block Body
// boardGames.forEach(game => {
//     console.log(game)
//     })

//Concise Body
// boardGames.forEach(game => console.log(game));

//Anonymous Function
boardGames.forEach(function (game) {
    console.log(game);
})

    
let shoppingList =['celery', 'limes', 'lemons', 'grenadine', 'oranges'];

//To access a specific element in an array, use bracket notation along with its index value
console.log(shoppingList[0]);

//Array.length - returns the number of elements in the array
console.log(shoppingList.length)

//Array.push() - adds element to the end of the array
shoppingList.push('salt"');
console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array

shoppingList.unshift("pepper");
console.log(shoppingList);

//Array.pop() - removes the last element in the array and returns that element
let removedElement = shoppingList.pop();
console.log(shoppingList);
console.log(removedElement);

//Array.shift() - removes the first element in the array and return that elemet
let removedElement = shoppingList.shift();
console.log(shoppingList);
console.log(removedElement);

//Array.map() - transforms the elements in the original array by calling the given function once for each 
//element in the array
console.log(shoppingList.map(item => item.toUpperCase()));
let newShoppingList = shoppingList.map(item => item.toUpperCase());
console.log(newShoppingList)

//Array.filter() - creates a new array with only the elements that pass the test in
//a given function
let newShoppingList = shoppingList.filter(item => item.startsWith('l'));
console.log(newShoppingList);

//Array.find() - returns the first element in the array that passes the test in a 
//given function]
let shoppingItem = shoppingList.find(item => item.startsWith('l'));
console.log(shoppingItem);

//Array.includes() - determines whether an array includes a specific element
let isIncluded = shoppinList.inclues('limes');
console.log(isIncluded);

//Arrays.indexOf() - search the array for a specific element and returns its firs index
//Returns -1 then element is not found
console.log(shoppingList.indexOf('lemons'));

//Array.findIndex() - returns the index of the first element in the array that passes the
//test in a given function. Returns -1 when the element is not found
let foundIndex = shoppingList.findIndex(item=> item.startsWieh('g'));
console.log(foundIndex);

//Array.every() - check if all elements in an array pass a test given as a function. If
//there is 1 element that returns a false value, the function returns false and does not
//check the rest of the elements
console.log(shoppingList.every(item => item.length > 1));

//Array.concat() - merge two or more arrays and returns a new array
//starting at the provided start artument and ends at, but does not include, the provided argument
let anotherShoppingList = ['sakt', 'mintl leaves', 'olives'];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//Array.slice() - selects a part of the array and returns a new array. Selects the
//elements starting the provided start artument and ends at, but does not include the
//provided end argument
let newArray = shoppingList.slice(1,3);
console.log(newArray);

//Array.splice() - add/removes elements in the array and returns the removed elements.
//First argument takes an integer that specifies at what index to add/remove elements.
//Second argument takes in the bumver of items to be removed. Optional third argument that
//takes in the new elements to be added to the array.
shoppingList.splice(2, 1, 'salt');
console.log(shoppingList);

//Array.sort() - sorts the items in an array. The sort order can either be alphabetic or
//numeric and can either be ascending or decending. By default, sort() orders the values as
//strings in alphabetical or ascending order. Can take in a compare function which indicates
//if you want to sort by ascending or descending.
console.log(shoppingList)
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b-a));  //want to sort by descending order
console.log(costs.sort((a, b) => a-b));   //wamt tp sprt bu ascending order

//Array.reverse() - reverses the order of the elements in the array
console.log(shoppingList.reverse());

//Array.toString() - converts the array into a string
console.log(shoppingList.toString());

//Array.joint() - converts the elementss in the Array into a string. Can accept an optionsl
//parameter, 'seperator', which indicates how the lements will be seperated. Default
//seperator is a comma
console.log(shoppingList);
console.log(shoppingList.joint('! and '));

//Lastly an es6 feature: the spread operator. The spread operator, indicated by these 3 dotes '...' 
//expands the contents of the array and takes it out of the array structure
console.log(shoppingList);
console.log(...shoppingList);

let numArray = [20, 40, 60];
functiion sum(numo\One, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));
















