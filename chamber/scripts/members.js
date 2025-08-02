const gridbutton = document.querySelector("#btngrid");
const listbutton = document.querySelector("#btnlist");
const display = document.querySelector("article");//
const cards = document.querySelector('#cards');
const spotlight = document.querySelector('#spotlight');

async function getData() {
    const response = await fetch('https://karenjoos.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displayMembers(data.members);
    
    // displayRandomMembers(data.members);
}

getData();

if (gridbutton != null) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    })
}

if (listbutton != null) {
    listbutton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    })
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let classList = "";
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let url = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phonenumber.textContent = `${member.phonenumber}`;
        url.textContent = `${member.url}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Member Name${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(url);

        cards.appendChild(card);

    });
}

//const random = displayRandomMembers(Math.floor(Math.random() * displayRandomMembers.length));
// console.log(random1);
// const randomThreeMembers = getData.random(displayRandomMembers, 3);

// const displayRandomMembers = (members) => {

//     var random = Object.keys(members)[Math.floor(Math.random() * members.length)];
//         members((member) => {
//             let card = document.createElement('section');
//             let name = document.createElement('h2');
//             let url = document.createElement('p');
//             let phonenumber = document.createElement('p');
//             let email = document.createElement('p');
//             let image = document.createElement('img');

//             name.textContent = `${member.name}`;
//             email.textContent = `EMAIL: ${member.email}`;
//             phonenumber.textContent = `PHONE: ${member.phonenumber}`;
//             url.textContent = `URL${member.url}`;

//             image.setAttribute('src', member.image);
//             image.setAttribute('alt', `Member Name${member.name}`);
//             image.setAttribute('loading', 'lazy');
//             image.setAttribute('width', '200');
//             image.setAttribute('height', '150');

//             card.appendChild(name);
//             card.appendChild(image);
//             card.appendChild(email);
//             card.appendChild(phonenumber);
//             card.appendChild(url);

//             cards.appendChild(card);

//         });

// }
