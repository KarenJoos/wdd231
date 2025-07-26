import { temples } from '../data/temples.js';
console.log(temples);

import { url } from '../data/temples.js';
console.log(url);

// grab a reference to the division where we display the items
const showHere = document.querySelector('#showHere');
// get a reference to the HTML dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');

myclose.addEventListener("click", () => {
    mydialog.closest();
});

// loop through the array of JSON items
function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x)
    })
}

displayItems(temples);

// name
// dedicated
// person
// number