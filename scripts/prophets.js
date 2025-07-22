// Step 2 open this file to browser
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Step 3 declaring url
const cards = document.querySelector('#cards');

// Step 4-10
async function getProphetData() {        //creating async function
    const response = await fetch(url);      //creating await and fetch
    const data = await response.json();     //storing to .json
    //console.table(data.prophets);         //check the data reponse
    displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}

getProphetData();

getData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('portrait');
        

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthDate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthPlace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(card);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
    
}



getProphetData();