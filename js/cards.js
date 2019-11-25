

class Team {
    constructor(id, abbreviation, conference, division, full_name) {
        this.id = id
        this.abbreviation = abbreviation
        this.conference = conference
        this.division = division
        this.full_name = full_name
    }
}


const newButton = document.querySelector('#newTeam')
newButton.addEventListener('click', function(){
    let newAbbreviation = prompt("Please enter the Abbreviation of your new team: ")
    let newConference = prompt("Is your new team in the East or West?")
    let newDivision = prompt("What division is your new team in?")
    let newFullName = prompt("What is the full name of your new team? (Example:'Utah Jazz')")
    const newTeam = new Team(31, newAbbreviation, newConference, newDivision, newFullName)
    populateDOM(newTeam)
})

async function getAPIData(url) {

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
    }
}
//now use the returned async data
const theData = getAPIData('https://www.balldontlie.io/api/v1/teams')
    .then(data => {
        for (const team of data.data) {
            populateDOM(team)
        }
    })

let mainArea = document.querySelector('main')
function populateDOM(team) {

    let teamScene = document.createElement('div')
    let teamCard = document.createElement('div')
    let teamFront = document.createElement('div')
    let teamBack = document.createElement('div')
    let name = document.createElement('h1')
    let conference = document.createElement('p')
    let division = document.createElement('p')
    let pic = document.createElement('img')

    fillCardBack(teamBack, team)

    teamScene.setAttribute('class', 'scene')
    teamCard.setAttribute('class', 'card')
    teamFront.setAttribute('class', 'card__face card__face--front')
    teamBack.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')


    name.textContent = team.full_name
    pic.src = `../images/${team.id}.png`
    conference.textContent = team.conference
    division.textContent = team.division

    teamFront.appendChild(pic)
    teamFront.appendChild(name)

    teamCard.appendChild(teamFront)
    teamCard.appendChild(teamBack)
    teamScene.appendChild(teamCard)

    mainArea.appendChild(teamScene)

    teamCard.addEventListener('click', function () {
        teamCard.classList.toggle('is-flipped');
    });

}
function fillCardBack(teamBack, data) {
    let teamAbbreviation = document.createElement('p')
    teamAbbreviation.textContent = `Abbreviation: ${data.abbreviation}`
    teamBack.appendChild(teamAbbreviation)

    let conference = document.createElement('p')
    conference.textContent = `Conference: ${data.conference}`
    teamBack.appendChild(conference)

    let division = document.createElement('p')
    division.textContent = `Division: ${data.division}`
    teamBack.appendChild(division)

    let img = document.createElement('img')
    img.setAttribute('class', 'cImage')
    if (data.conference === 'West') {
        img.src = `../images/western.png`
    } else {
        img.src = `../images/eastern.png`
    }
    img.alt = 'Placeholder image'
    teamBack.appendChild(img)
}