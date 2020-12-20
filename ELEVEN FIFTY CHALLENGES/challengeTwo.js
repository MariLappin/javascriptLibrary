//DATA TYPES

// let myString = 'this is a string';
// let myNumber = 10;
// let myBoolean = true;
// let myArray = [red, green, cold]; Can insert an array within an array
// // let myObject = {firstKey: "a string"}
// // let myUndefined;   or write myUndefined = undefined
// let mu=yNull = null;

// to console.log these types of variables. ie
console.log(typeof myBoolean);

//CHALLENGE

//BRONZE, Create an Object that contains a string, number, boolean and object. Console.log the type of one of the values in the object

let myObject = {
    string: "string",
    number: 15,
    boolean: true,
    object: {}
     
}
 console.log(typeof myObject.boolean)



//SILVER, Write a conditional that checks the type of one of the values stored in the object and console log the data type. If the value is not a 
//string, number, boolean or object, console log 'What are you?'

let value = typeof myObject.number;

if (value === "string") {
    console.log("The value is a string");
}else if (value === "number") {
    console.log("The value is a number");
}else if (value === "boolean") {
    console.log("The value is boolean");
}else if (value === "object") {
    console.log("The value is an object")
}else {
    console.log("What are you?")
}

