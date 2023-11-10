// preloader delay
window.onload = function() {
    let preloader = document.getElementById('preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 800);
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['UX/UI Designer', 'Frontend Developer', 'Backend Developer', 'Analyst', 'Copywriter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// scroll reveal
ScrollReveal ( {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.header, .home-content, .heading, .ellipse-2', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .about-content, .skills-container, .projects-box, .projects-more, .contact form, .ellipse-3, .ellipse-5, .projects-link-more', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img, .ellipse-1, .ellipse-4, .ellipse-6', {
    origin: 'left'
});