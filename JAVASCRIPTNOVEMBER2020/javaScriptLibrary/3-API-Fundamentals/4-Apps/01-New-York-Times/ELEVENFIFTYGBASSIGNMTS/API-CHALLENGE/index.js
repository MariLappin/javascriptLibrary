
 baseURL = "https://picsum.photos/";
  endUrl = "v2/list";

  const section = document.getElementById("randomPhoto");

//   let section = document.querySelector('div');
//   section.setAttribute('class', 'section');

fetch(`${baseURL}${endUrl}`)
 .then(function(result) {
     return result.json()
 })
 .then(json => displayResults(json));


function displayResults(randomPhoto){
  console.log(randomPhoto)

  while (section.firstChild) {
    section.removeChild(section.firstChild);
    }

    if(randomPhoto.length === 0) {
        console.log("No Results");
    } else {
        let randomValue = Math.floor(Math.random() * (randomPhoto.length - 0 ) + 0);
        let photo = randomPhoto[randomValue];

        let photoDiv = document.createElement("div");   
        let heading = document.createElement('h1');
        let img = document.createElement('img');

        img.setAttribute("class", "apiImg");

        heading.textContent = photo.author;
        img.src = photo.download_url;
        img.alt = photo.url;

        section.appendChild(photoDiv);
        photoDiv.appendChild(heading);
        photoDiv.appendChild(img);
    }
//how do i do a loop that brings up the photographer?>

// if "id"==="1"
//   text "Alejandro Escamilla"
//   else if""====""
//   text "photogragherName"
//   else if
//  
}

// function displayResults(json) {
//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }
//     console.log("DisplayResults", json);
//     let people = json;



//     if(people.length === 0) {
//         console.log("No Results");
//     } else {

//         let randomValue = Math.floor(Math.random() * (people.length - 0 ) + 0);
//         let current = people[randomValue];

//             let article = document.createElement("article");
//             let name = document.createElement("h1")
//             let heading = document.createElement("h2");
//             let gender = document.createElement("p");
//             let ageInfo = document.createElement("p")
//             let eyecolorInfo = document.createElement("p");
            
//             name.textContent = "Name: " + current.name;
//             gender.innerText = "Gender: " + current.gender;
            
//             if (current.age) {
//                 ageInfo.innerText = "Age: " + current.age;
//             } else {
//                 ageInfo.innertext = "Age: Unknown";
//             }

//         eyecolorInfo.innerText = "Eye Color: " + current.eye_color;

//         article.appendChild(heading);
//         heading.appendChild(name);
//         heading.appendChild(gender);
//         heading.appendChild(ageInfo);
//         heading.appendChild(eyecolorInfo);
//         section.appendChild(article);


// // let people = document.createElement("article");
// // let heading = document.createElement("h2");

// // // people.appendChild(heading);
// // section.appendChild(people);
// }   


// }

  


       
