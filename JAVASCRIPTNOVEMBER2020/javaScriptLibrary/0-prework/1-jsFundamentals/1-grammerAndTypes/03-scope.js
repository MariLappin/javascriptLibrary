/*
SCOPE

What is scope? JS has both local and global scope

Indented furthest to the left is global scope

*/
//EXAMPLE ONE
var x = 12;

function scope(){
   var x = 33;
   var y = 10;
   console.log(x);
}

scope(); //logs 33
//console.log(y);
console.log(x);  //logs 12

//EXAMPLE TWO

var x = 12;

function scope(){
   x = 33;
   console.log(x);
}

scope()
console.log(x);

//EXAMPLE THREE - more scope
var x = 1;

function scope(){
   var x = 2;
   function scope(Inner){
      var x = 3;
      console.log(x);   //3
   }
   scopeInner();
   console.log(x);     //2

}
scope();
console.log(x);   //1

//EXAMPLE 4 contrast with five

var x = 12

function scope(){
   var x = 33;
   if (true){
      let x = 45;
      console.log(x);   //45
   }
   console.log(x);  //33
}

scope();
console.log(x);  //12

//EXAMPLE 5 contrasts with 4

var x = 12;

function scope(){
  var x = 33;
  if (true){
   var x = 45;
   console.log(x);   //45 innermost x
  }
  console.log(x);  //45 doesn't read above the curly bracket in the if/true statement
}

scope();
console.log(x);  //12 reads the global






