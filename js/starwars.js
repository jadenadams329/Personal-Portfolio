import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

let mainArea = document.querySelector('main');

/* films.forEach(function(film){
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
}); */

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

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        //matchedDiv.setAttribute("style", "display: none;")
        matchedDiv.className = 'animated infinite bounce delay-2s'
    })
});
let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        //matchedDiv.setAttribute("style", "display: none;")
        matchedDiv.className = 'animated infinite bounce delay-2s;'
    })
});

let otherButton = document.createElement('button')
otherButton.textContent = 'Non-Gender Characters'
otherButton.addEventListener('click', () => {
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        //matchedDiv.setAttribute("style", "display: none;")
        matchedDiv.className = 'animated infinite bounce delay-2s;'
    })
});

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')