/*
FUNCTIONS -

General Ideas: at their broadest level, dunctions do the following:
1)  they take some input which the function will handle/process
2)  they process the input given to them
3)  they usually, but not always, return some value
4)  they can be involed (used) as many times as we want, cutting down on code repetition

*/

//example one:

function newFunc(num){     //1. takes the input in this case a num
    return num + 1;          //2. processes the input (takes num and adds 1)
  }                          //3. retuns the value of the number + 1
                             //4. used multiple times by console logging newFunc
  console.log(newFunc(7));
  console.log(newFunc(10));
  
  //example two:
  
  function sentence(firstName, lastName){
      return `My first name is ${firstName} and my last name is ${lastName}`;
  }
  
  console.log(sentence('Jonathan', 'Huer'));
  console.log(sentence('Tyler', 'Shelton'));
  let superImportantSentence = sentence('Nickey', 'Disborough');
  console.log(superImportantSentence);
  
  //example three - let's buile a function that takes a comples type (ie array) and console.logs each item
  //in the input array
  
  let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
  let arr2 = [5,6,7,8,9,10];
  
  function iteratorFunc(inputArr){
      for (let element of inputArr){
          console.log(element);
      }
  }
  iteratorFunc(arr);
  iteratorFunc(arr2);
  
  
  
  
 