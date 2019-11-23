
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
let allTeams = []
const theData = getAPIData('https://www.balldontlie.io/api/v1/teams').then(data => {
    allTeams = data.data
    /* makeSimpleMap(allTeams) */
    populateDOM(allTeams)
})

/* function makeSimpleMap(allOfThem){
    let results = allOfThem.map(team =>{
        return{
            id: team.id,
            abbreviation: team.abbreviation,
            city: team.city,
            conference: team.conference,
            division: team.division,
            full_name: team.full_name,
            name: team.name
        }
    })
} */

const container = document.querySelector('.container')

function populateDOM(team_array) {
    team_array.forEach(team => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')
        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image')
        let figureImage = document.createElement('img')
        figureImage.src = `../images/${team.id}.png`
        figureImage.alt = 'Placeholder image'

        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent(team))
        container.appendChild(card)
    })
}

function cardContent(team) {

    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')
    let img = document.createElement('img')
    if (team.conference === 'West') {
        img.src = `../images/western.png`
    } else {
        img.src = `../images/eastern.png`
    }
    img.alt = 'Placeholder image'
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = team.full_name
    let subTitleP = document.createElement('p')
    subTitleP.setAttribute('class', 'subtitle is-6')
    subTitleP.textContent = team.abbreviation

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subTitleP)
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)

    return cardContent
}

