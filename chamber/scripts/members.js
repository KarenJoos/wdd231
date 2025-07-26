//const response = await fetch('https://karenjoos.github.io/wdd231/chamber/data/members.json');
const gridbutton = document.querySelector("#btngrid");
const listbutton = document.querySelector("#btnlist");
const display = document.querySelector("article");//
const cards = document.querySelector('#cards');

async function getData() {
    const response = await fetch('https://karenjoos.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

getData();

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
})

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})

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

    // const displayListMembers = (members) => {
    // members.forEach((member) => { 
    //     let card = document.createElement('section');
    //     let name = document.createElement('h2');
    //     let address = document.createElement('p');
    //     let phonenumber = document.createElement('p');
    //     let url = document.createElement('p');
    //     let image = document.createElement('img');

    //     name.textContent = `${member.name}`;
    //     address.textContent = `${member.address}`;
    //     phonenumber.textContent = `${member.phonenumber}`;
    //     url.textContent = `${member.url}`;

    //     image.setAttribute('src', member.image);
    //     image.setAttribute('alt', `Member Name${member.name}`);
    //     image.setAttribute('loading', 'lazy');
    //     image.setAttribute('width', '200');
    //     image.setAttribute('height', '150');

    //     card.appendChild(image);
    //     card.appendChild(name);
    //     card.appendChild(address);
    //     card.appendChild(phonenumber);
    //     card.appendChild(url);

    //     cards.appendChild(card);

    // });
}
