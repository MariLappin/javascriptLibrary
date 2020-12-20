const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1declare the baseURL of the API to fetcch
const key = "AeP9YXSVyAbkKZRnj9Gyx1kdAfCMm60s "; //2the API key to let NYT know who is using their site. key can expire and you get anew key
let url; // holds the place for the string interpolation

//SEARCH FORM

const searchTerm = document.querySelector('.search'); //document. grabs things from the HTML & query selector is to call to the CSS selector that we're manipulating
const startDate= document.querySelector('.start-date');//
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');

const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');
nav.style.display = "none";///hides buttons before search

let pageNumber = 0;

searchForm.addEventListener('submit' , fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

console.log('PageNumber:', pageNumber);
let displayNav = false;

function fetchResults(e) {
  e.preventDefault();

  console.log(e);    //prevents page from refreshing every time 'submit' is clicked
}
url = `${baseURL}?api-keys=${key}&page=${pageNumber}&q=${searchTerm.value}`;
console.log('URL:', url);

if (startDate.value !=="") {
  console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
}

if (endDate.value !=="") {
     url += '&end_date=' + endDate.value;
}

fetch(url)
.then(functiion(results) { //then returns a promisie- pulls the object from the API
  return result.(json) { //pulls the json object from the return from the previous promise
    console.log(json); //allows you to see the json is functiional in the inspect tool
    displayResults(json);//function: displayRefults; parameter: json
  });
  console.log('this is a test');
}

function displayResults(json) { //creating the displayResults function to pull json result information
  while (section.firstChild) {
  section.removeChild(section.firstChild);
  }  
    //checks to see if the section element has any child elements
  //if yes, then the section needs removed o the page shows articles when next and previous are clicked
}
let articles = json.response.docs;

if(articles.length===0){
  console.log("no results"); //returns no results of there are no articles
} else {
  for (let i=0; i < articles.length; i++){
    console.log(i);
  let article = document.createElement('article');
  let heading = document.createElement('h2');
  let link = document.createElement('a');
  let img = document.createElement('img');
  let para = document.createElement('p');
  let clearfix = document.createElement('div');

  let current = articles[i];
  console.log('current:', current); //finds the most current article to place it first in your search

  link.href = current.web_url;
  link.target='blank'
  link.textContent = current.headline.main;

  para.textContent = "Keywords: ";//para is a p tag - keywork is getting added to the p tag
  
  for (let j=0; j<current.keywords.length; j++){
    let span = document.createElement('span');
    span.textContent += current.keywords[j].value +',';//keywords stay together
  }
}


if (current.mulimedia.length>0) {
  img.src = 'http://wwww.nytimes.com/' + current.multimedia[0].url;
  img.alt = current.headline.main;
}

clearfix.setAttribute('class', 'clearfix');

article.appendChild(heading);
heading.appendChild(link);
article.appendChild(img);
article.appendChild(para);
article.appendChild(clearfix);
section.appendChild(article);
  }

if(articles.length === 10) {
  nav.style.display = 'block';
  previousBtn.style.display = 'block';
  nextPage.style.display = 'block';
} else if (articles.length < 10 && pageNumber > 0){
  nav.style.display = 'block';
  previousBtn.style.display = 'block';
  nextBtn.style.display = 'none';
} else {
  nav.style.display = 'none';
  }

  function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber):

  }
  function previousPage(e) {
    if(pageNumber > 0) {
      pageNumber--;
      fetchResults(e);
    } else {
      return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber):

    }
  
    
  
  function previousPage() {
    console.log("Next button clicked");
  } //5










function fetchResults(e) {
  console.log(e); //2
  // Assemble the full URL
  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value; //3
  console.log(url); //4
}

function fetchResults(e) {
  e.preventDefault(); //1
  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value;
}

function fetchResults(e) {
  //previous code
  fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displayResults(json); //1 & //3
    });
}

function displayResults(json) {
  let articles = json.response.docs;

  if (articles.length === 0) {
    console.log("No results");
  } else {
    //Display the data
  }
}

//2
function displayResults(json) {
  console.log("DisplayResults", json);
}

function displayResults(json) {
  let articles = json.response.docs;
  console.log(articles);
}



function fetchResults(e) {
  e.preventDefault();

  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value;
  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }

  //1
  fetch(url)
    .then(function (result) {
      console.log(result);
      return result.json(); //2
    })
    .then(function (json) {
      console.log(json); //3
    });
}

para.textContent = 'Keywords';

link.href = current.web_url;//linking to the article on the NYT website
link.textContent = current.headline.main;//referencing the headline from the NYT to display in our search result

for(let j = 0; j< current.keywords.length; j++) {  //allows users to search with keywords
  let span = document.createElement('span');
  span.textContent += current.keywords[j].value + "";
  para.appendChild(span);

}
