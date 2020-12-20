//RELATIONAL OPERATORS

/*Greater Than:>
  Less Than:<
  Less Than or Equal <=
  Greater Than or Equal >=


  /LOGICAL OPERATORS
   And: &&
   Or: ||

   EQUALITY OPERATORS

   Equal: ==
   Not Equal: !=

   STRICT OPERATORS:

   Equal: ===
   Not Equal: !==

VISUALIZE A FLOW CHART         What is your age? --> Is your age above 21? --> if YES alcohol purchase is acceptable
                                                                           --> if NO cannot buy alcohol
       Now convert to code:                                                                    
*/

let age = 15;
if (age>=21){
    console.log('Yes can purchase')
}
else (
    console.log('can not purchase')
)

//WHOSE NAME IS LONGER CHALLENGE
//BRONZE

let myName = 'Mari';
let friendName = 'Cindy';
console.log(myName.length);
console.log(friendName.length);

//SILVER

let myName = "Mari";
let friendName = "Cindy";
let sentence;

if (myName.length > friendName.length) {
 sentence = "My name is longer than " + friendName;
 console.log(sentence);  
} else {
    sentence = `${friendname}'s is longer than ${myName}`;  
    console.log(sentence); 
}

//GOLD

const myName = 'Mari';
const friendName = 'Cindy';
let sentence;

if (myName.length > friendName.length) {
    sentence = "My name is longer than " + friendName;
    console.log(sentence);  
   } else if (myName.length == myFriendName.length){
     const differenceInLetters = friendName.length - myName.length;
     sentence = `${friendName}'s name is equal to ${myName} ${differenceInLetters} letters are different`;  
     console.log(sentence);
   }   
   else {
    //    const differenceInLetters = friendName.length - myName.length;
    const differenceInLetters = friendName.length - myName.length;
    
       sentence = `${friendname}'s name is longer than ${myName} by ${differenceInLetters} letters`;  
       console.log(sentence); 
   }

