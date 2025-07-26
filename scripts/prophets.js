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

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');
        

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        cards.appendChild(card);
    });
    
}



getProphetData();