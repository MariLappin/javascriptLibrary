/*
COMPARISON OPERATORS

5-expressionsAndOperators
   02-comparisonOperator.js
*/

//equality comparison operator (same value)
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');


//strict equality comparison operator(same value and type)
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison operator(doesn't care about type)
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison operator(cares about type)
console.log('3' !== 3);
console.log(3 !==3);

//greater than comparison operator
console.log(3 > 2);
console.log(2 > 3);

//less than comparison operator
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to (doesn't care about type)
console.log(3 >= 2);
console.log(2 >= 3);

//less than or equal to
console.log(3 <= 2);
console.log(2 <= 3);

//And (both expressions on either side of the operator must be true 'And' to return true)
console.log(3>5 && 1<2);
console.log(1<2 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or" to return true)
console.log(3>0 || 3>2);
console.log(1>3 || 4>3);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

let arr = [1,2,3,4];
console.log(arr ==[1,2,3,4]);
console.log(arr == arr);

//when comparing complex types ie functions, arrays, objects need the content to be identical, doesn't come ouy true if they are equal but different

















