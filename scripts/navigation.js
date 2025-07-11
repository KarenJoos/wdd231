// Selected elements used 
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggling the class show on and off
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


