// const header = document.getElementById("header");
// console.log(header);

// //document.getElementById("header").style.color = 'green';
// //once captured above, can abbreviate the query

// header.style.color = "blue";
// header.innerText = "Hello World";

// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";
// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++) {
//   errorList[i].style.color = "red";
// }

// //Example Two Looping
// for(error of errorList){
//     error.style.color = "green";
// }

// //Example of for each loop (not possible)

// errorList.forEach(error => error.style.color = "purple);

// //THIS WILL NOT WORK

// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText ="abcdefghijklmnopqrstuvwxyz";

// const lists = document.getElementsByTagName("li");
// console.log(lists);

// lists[0].style.fontStyle = "italic";

// for (let i = 0; i < lists.length; i++){
//   lists[i].style.fontStyle = 'italic';

// }
//QUERY SELECTOR

// const header = document.querySelector('h1');
const header = document.querySelector("header");
console.log(#header);

//calling up a class

const errorList = document.querySelector(".error-list");
console.log(errorList);

const headerTagss = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

//FOR EACH LOOP

headerTags.forEach(h =>{
  h.style.color = 'blue';
})

const lists = document.querySelectorAll('.error-list');

listItems.forEach(li =>{
  li.style.fontStyle = "italic"
});


















    

