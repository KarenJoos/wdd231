const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Non Profit is our free membership. Joining our free membership will provide you with an increased credibility and networking opportunities through events and directories.`
})

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bronze is our $100 per year will provide you with all of the Non Profit benefits as well as cost-saving programsthroughout the year.`
})

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Silver is our $200 per year will provide you with all of the Non Profit and Bronze benefits as well as being a fearured listing and sponsorship options.`
})

openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Gold is our $300 per year will provide you with all of the Non Profit, Bronze, and Silver benefits as well as training and events to help your staff develop business skills.`
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})

const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

const timestamp = Date.now();

document.addEventListener('DomContentLoaded', function () {
    const timestamp = Date.now();
    document.getElementById('timestampField').value = timestamp;
});

document.querySelector('#results').innerHTML = `
    <p>Thanks for your application!</p>
    <p>Application for: ${memberInfo.get('first')} ${memberInfo.get('last')}</p>
    <p>Organizational Title: ${memberInfo.get('title')}</p>
    <p>Email: ${memberInfo.get('email')}</p>
    <p>Phone: ${memberInfo.get('phone')}</p>


    `