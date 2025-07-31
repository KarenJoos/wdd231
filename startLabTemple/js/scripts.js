import { temples } from '../data/temples.js'
// console.log(temples)

import { url } from '../data/temples.js'
// console.log(url)

// grab a reference to the division where we display the items
const showHere = document.querySelector('#showHere');
// get a reference to the HTML dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');

myclose.addEventListener("click", () => mydialog.close());

// loop through the array of JSON items
function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    }) //end loop
} //end function

displayItems(temples);


// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
} //end of function

