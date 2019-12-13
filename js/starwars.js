import { people } from '../assets/people.js'
import { films } from '../assets/films.js';
import { planets } from '../assets/planets.js';

let mainArea = document.querySelector('main');

//setting up each person, adding info from data
people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    pic.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
});


//films array
films.forEach((film) => {
    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let releaseDate = document.createElement('p')
    let pic = document.createElement('img')

    pic.setAttribute('class', 'picDivs')

    title.textContent = film.title
    releaseDate.textContent = film.release_date
    pic.src = `https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg`

    filmDiv.appendChild(title)
    filmDiv.appendChild(releaseDate)
    filmDiv.appendChild(pic)

    mainArea.appendChild(filmDiv)
 

})


//grabs the character ID
function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

function removeAnimationClasses() {
    const buttons = userList.querySelectorAll("button");
  
    buttons.forEach(function(button) {
      button.classList.remove = 'animated infinite bounce delay-2s;';
    });
  }

const allDivs = Array.from(document.querySelectorAll('div'))

const mainHeader = document.querySelector('header')
//making male characters bounce on page
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })
});

//making female characters bounce on page
let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })
});

//making non gender characters bounce on page
let otherButton = document.createElement('button')
otherButton.textContent = 'Non-Gender Characters'
otherButton.addEventListener('click', () => {
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })
});
//Want to add films button
let filmsButton = document.createElement('button')
filmsButton.textContent = 'Films'
filmsButton.addEventListener('click', () => {
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
        
    })

});


mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)
mainHeader.appendChild(filmsButton)

//filters
const maleCharacters = people.filter(person => person.gender !== 'male')
const femaleCharacters = people.filter(person => person.gender !== 'female')
const otherCharacters = people.filter(person => person.gender === 'female' && person.gender === 'male')

