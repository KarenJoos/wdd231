// Selected elements used 
const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');

// Toggling the class show on and off
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})


