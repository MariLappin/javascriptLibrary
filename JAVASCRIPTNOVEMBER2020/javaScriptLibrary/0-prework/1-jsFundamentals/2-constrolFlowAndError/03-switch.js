/*
SWITCH STATEMENTS
*/

let friend = 'Alex';

switch(friend){
    case 'tom':
        console.log("Hey Tom, when will you bring sourdough bread for me?");
        break;
    case 'Ken':
        console.log('Hey Ken, do you own a Ferrari?');
        break;
    case 'Alex':
        console.log('Hey Alex, how many Magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}. but do I know you?`);

}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
  case true:
      console.log('yep is a string or a boolean');
      break;
    default:
        console.log('yep is not a string or a number');
     
}

//my code

let dogname = 'Harper'

switch(dogname){
    case "Harper":
        console.log("hi Harper! Want to go for a walk?");
        //break
    case "Waffles":
        console.log('hi Waffles. Do you want a treat?');
        //break
    case "Luna":
        console.log('hey girl! Want to go go the dog park?');
        //break
    default:
        console.log(`hi $(dogname). What is your dog name?`)
}
    
