import {places} from '../data/places.mjs'
console.log(places);

const showHere = document.querySelector('#allPlaces');

function displayItems(places) {
    places.forEach(x => {
        //build the card element
        const theCard = document.createElement('div')
        //build the photo element
        const thePhoto = document.createElement('img')
        thePhoto.src = `images/${x.image}`
        thePhoto.alt = x.name
        thePhoto.setAttribute('loading', 'lazy');
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
        //build the learn more button
        const learnbtn = document.createElement('button')
        learnbtn.innerHTML = `Learn More`

        learnbtn.addEventListener('click', () => {
            learnbtn.innerText = x.cost
        })
        theCard.appendChild(learnbtn)

        showHere.appendChild(theCard)
    }); //end loop
} //end function

//Start displaying all items in the JSON file
displayItems(places)

function updateSidebarMessage() {
    const sidebar = document.querySelector('#sidebar');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();

    if (!lastVisit) {
        //First visit
        sidebar.innerText = 'Welcome! Let us know if you have any questions.';
    } else {
        const lastVisitDate = Date.parse(lastVisit);
        const diffInMilliseconds = currentDate - lastVisitDate;
        const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); //converts to days

        if (diffInDays < 1) {
            sidebar.innerText = 'Back so soon! Awesome!';
        } else if (diffInDays > 1) {
            sidebar.innerText = `You last visited ${diffInDays} days ago.`
        } else {
            sidebar.innerText = `You last visited 1 day ago.`
        }
    }

    localStorage.setItem("lastVisit", currentDate.toString());
}

window.addEventListener("load", updateSidebarMessage);
