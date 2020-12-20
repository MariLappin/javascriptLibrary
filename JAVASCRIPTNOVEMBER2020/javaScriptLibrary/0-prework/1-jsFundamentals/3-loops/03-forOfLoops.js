/*
FOR OF LOOPS   

of requires that your 'thing' you're looping through be iterable--meaning it needs to be numbered. For of gives you the value
Arrays contain what are know as iterable properites, Each property - or value of the array, each contains its own index starting at 0
*/

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};
//                                     // 0   1              2          3        4
// for (item of student){
//     console.log(item);

// }


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}