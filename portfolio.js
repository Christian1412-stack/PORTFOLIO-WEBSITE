const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    // navLinks.innerHTML = `<ul id="hamburger">
    // <li><a href="#About">About</li></a>
    // li><a href="#Experience">Experience</li></a>
    // li><a href="#Projects">Project</a></ul>`
});

const navLink = document.querySelectorAll('.nav-links li a');
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});