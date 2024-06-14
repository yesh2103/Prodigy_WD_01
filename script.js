window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;';
document.querySelector('.navbar').appendChild(navToggle);

navToggle.addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('active');
});
