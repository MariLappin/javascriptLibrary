console.log('hello');

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById('jokeButton');

//add event listener and want it to call a function

jokeButton.addEventListener('click', fetchJokes);


function fetchJokes() {
    // alert("it worked");
    fetch(baseURL)
    .then((res) => res.json()).
    then((json) => displayJoke(json.value)
    );

}

function displayJoke(joke){
    let jokeText = document.getElementById
    ("joke");
    jokeText.innerText=joke
}