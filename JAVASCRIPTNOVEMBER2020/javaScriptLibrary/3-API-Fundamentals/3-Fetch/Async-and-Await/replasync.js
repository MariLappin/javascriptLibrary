async function slowResults(){
    await fetch('https://swapi.dev/api/people/<number here>)
    .then(res => res.json())
    .then(json => console.log(json))
    console.log('this should print last')
}

slowResults();
// .then
// .then
// console.log