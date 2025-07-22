const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json');
    const data = await response.json();
    // console.table(data.prophets); 
    displayProphets(data.prophets);

    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {

            let card = document.createElement('section');
            letfullName = document.createElement('h2');
            let img = document.createElement('portrait');

            fullName.textContent = `${prophet.name} lastname`;

            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} lastname`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            card.appendChild(card);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
    }
}



getProphetData();