const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json');
    const data = await response.json();
    console.table(data.prophets);
}

getProphetData();