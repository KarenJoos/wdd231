import {activities} from '../data/activities.mjs';
console.log(activities);


const show = document.querySelector('#activity');

function displayItems(activities) {
    activities.forEach(x => {
        //build the card element
        const card = document.createElement('div')
        //build the photo element
        const image = document.createElement('img')
        image.src = `images/${x.photo}`
        image.alt = x.name
        image.setAttribute('loading', 'lazy');
        card.appendChild(image)
        //build the title element
        const title = document.createElement('h2')
        title.innerText = x.name
        card.appendChild(title)
        //build the description element
        const desc = document.createElement('p1')
        desc.innerText = x.description
        card.appendChild(desc)
        //build the supplies element
        const supply = document.createElement('p2')
        supply.innerText = x.supplies
        card.appendChild(supply)
        //build the learn more button
        // const learnbtn = document.createElement('button')
        // learnbtn.innerHTML = `Learn More`

        // learnbtn.addEventListener('click', () => {
        //     learnbtn.innerText = x.cost
        // })
        // theCard.appendChild(learnbtn)

        show.appendChild(card)
    }); //end loop
} //end function

//Start displaying all items in the JSON file
displayItems(activities)