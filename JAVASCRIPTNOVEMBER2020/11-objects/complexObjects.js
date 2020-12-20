
/*
OBJECTS

*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
      seasonInfo: {
       episodeInfo: [
        {episode: 1, episodeName: 'Piot '},
        {episode: 2, episodeName: 'Magazine Profile' },
        {episode: 3, episodeName: 'Shots and Salsa' },
        {episode: 4, episodeName: 'Mannequin' },
        {episode: 5, episodeName: 'Shoplifter' },
        {episode: 6, episodeName: 'Secret Shopper' },
        {episode: 7, episodeName: 'Color Wars' },
        {episode: 8, episodeName: 'Wedding Day Sale' },
        {episode: 9, episodeName: 'All-Nighter' },
        {episode: 10, episodeName: 'Demolition' },
        {episode: 11, episodeName: 'Labor' }
    ]
  }
 },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.epesodeInfo[1].episodeName);

// console.log(netflix);
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//pick an episode to log in the terminal. Using dot notation, walk through
//the netflix object, and print off episode number, and episode name

console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[8].episodeName);


//JSON - Javascript Object Notation
//allows a JS object to be sent as a text and then it is converted back to JS
//quotes fo around all values except booleans or numbers

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
      "**/.git": true,
      "**/.DS_Store": true,
      "**/*.js": {
          "when": "$(basename).ts"
      },
      "**/*.js.map": {
          "when": "$(basename)"
      }
  },
  "editor.fontFamily"; "Monaco, 'Courier New', monospece",
  "editor.detectIndentation"; false,
  "editor.letterSpacing"; 0,
  "editor.tabSize"; 2,
  "files.autoSavee"; "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]"; {},
  "files.association": {
      "*.html": "html",
      "*.js": "javascriptreact"
}.
"html.format.indentInnerHtml": true,
"editor,fontSize": 11,
"liveServer.settings.donotShowInforMsg": true,
"liveServer.settings.port": 3500,
"[javascriptreact]": {}

}

let spaceJam = {
 toonSquad: {
  human: 'Michael Jordan',
  rabbit1: 'Bugs Bunny',
  rabbit2: 'Lola Bunny',
  duck: 'Daffy Duck',
  tDevil: 'Tasmanian Devil',
  bird: 'Tweety',
  cat: 'Sylvester'
  pig: 'Porky Pig'
},
monstars: {
   0: 'Bupkus',
   1: 'Bang',
   2: 'Newt',
   3: 'Pound',
   4: 'Blanko'
},
nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

console.log(Object.keys(spaceJam));  //Object.keys returns an array consisting of the keys in our object

console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad).toString());  //shows array as a string instead of a list


console.log(Object.values(spaceJam));   ///this returns a list of the keys AND the values inside the keys
//square bracket notation let us dynamically refer to the keys of the object -- we don't have to
//code specific keys

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10

}
console.log(garden.vegetable);

let inc = 'vegetable';
console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread';
baking.bestKeyEver = 'corn bread!';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);

let contact = {};

contact.name = 'John';
contact.phone = '3175555555';

console.log(contact);

contact['notes'] = 'Best friend';

console.log(contact);



let hasName = contact.hasOwnProperty('name');

console.log(hasName);

let newArray = Object.keys(contact);
console.log(newArray);


let.push


let restaurant={
    restaurantName= '{Pizzology', 'opened 2014', 'seating capacity 95', 'dining options: dinein/carryout', drinkoptions: ' Coke products'
}

let restaurantData ={
    restaurantName: 'Pizzology',
    yearBuilt: '2014',
    seating: "90+",
    carryOut: true,
    softDrinks: ["Coke", "Dr Pepper"];
};

console.log(group)[4].mostRecentMovieWatched;
for (let i - 0; i < group.length, i++){
    console.log(group[i].mostRecentMovieWatched);

}

//class challenge

let group = [
    {
       name: "Ariana",
       age: 26,
       graduatedHSYear: 2012,
       pets: true,
       petNames: ["Gunner"],
       mostRecentMovieWatched: "X-Men: Phoenix",
       carsOwned: [{
           make: "Honda",
           model: "Civic",
       }],
       favoritePotato: "Baked",
    },
{
    name: "Daniel",
    age: 25,
    graduatedHSYear: 2013,
    pets: false,
    petNames: null,
    mostRecentMovieWatched: "Coco",
    carsOwned: [{
        make: "Chevy",
        model: "Equinox",
    }],
    favoritePotato: "Mashed",
 },
 {
    name: "Mari",
    age: 50,
    graduatedHSYear: 1988,
    pets: true,
    petNames: ["Harper"],
    mostRecentMovieWatched: "Holidate",
    carsOwned: [{
        make: "Infinity",
        model: "JX-37",
    }],
    favoritePotato: "Mashed",
 },
 {
    name: "Emily",
    age: 24,
    graduatedHSYear: 2015,
    pets: false,
    petNames: [null],
    mostRecentMovieWatched: "Back to the Future 2",
    carsOwned: [{
        make: "Toyota",
        model: "Camry",
    }],
    favoritePotato: "Sweet",
 },
  {
    name: "Nate",
    age: 23,
    graduatedHSYear: 2015,
    pets: true,
    petNames: ["Brinkley"],
    mostRecentMovieWatched: "Snowden",
    carsOwned: [{
        make: "Honda",
        model: "Accord",
    }],
    favoritePotato: "Sweet",
 },
]

let moviesWatched = []
// console.log(group[4].mostRecentMovieWatched);
for (let i = 0; i < group.length; i++) {
    console.log(group[i].mostRecentMovieWatched);
    moviesWatched.push(group[i].mostRecentMovieWatched);
}
console.log(moviesWatched);































