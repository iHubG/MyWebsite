const btn = document.querySelector('.menu-button');
const navbar = document.querySelector('.navbar-box');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
})