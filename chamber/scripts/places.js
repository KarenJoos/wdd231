import {places} from '../data/places.mjs'
console.log(places);

const showHere = document.querySelector('#allplaces');

function displayItems(places) {
    places.forEach(x => {
        //build the card element
        const theCard = document.createElement('div')
        //build the photo element
        const thePhoto = document.createElement('img')
        thePhoto.src = `images/${x.image}`
        thePhoto.alt = x.name
        theCard.appendChild(thePhoto)
        //build the title element
        const theTitle = document.createElement('h2')
        theTitle.innerText = x.name
        theCard.appendChild(theTitle)
        //build the address element
        const theAddress = document.createElement('address')
        theAddress.innerText = x.address
        theCard.appendChild(theAddress)
        //build the description element
        const theDesc = document.createElement('p')
        theDesc.innerText = x.description
        theCard.appendChild(theDesc)

        showHere.appendChild(theCard)
    }); //end loop
} //end function

//Start displaying all items in the JSON file
displayItems(places)
