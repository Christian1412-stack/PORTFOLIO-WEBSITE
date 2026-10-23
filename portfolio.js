const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const theme = document.getElementById('theme');
const body = document.body;

theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        theme.textContent = '☀️';
        theme.classList.add('active');
    } else {
        theme.textContent = '🌙'
        theme.classList.remove('active')
    }
});

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLink = document.querySelectorAll('.nav-links li a');
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});