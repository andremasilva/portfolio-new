let myDIVProject = document.getElementById("myDIV");
let factsdDiv = document.getElementById('randomDiv');
let loader = document.querySelector(".preloader");


let randomFacts = ['A shrimp s heart is in its head.',
    'It is physically impossible for pigs to look up into the sky.'
    , 'A crocodile cannot stick its tongue out.',
    'Most people fall asleep in seven minutes.',
    'A cat has 32 muscles in each ear.',
    'A shark is the only known fish that can blink with both eyes.',
    'If you sneeze too hard, you could fracture a rib.'
];

//Hide project
function hideProject() {
    if (myDIVProject.style.display === "none") {
        myDIVProject.style.display = "block";
    } else {
        myDIVProject.style.display = "none";
    }
}

//random Facts
function randomfacts() {
    factsdDiv.innerHTML = randomFacts[Math.floor(Math.random() * randomFacts.length)];
}


//preloader
window.addEventListener('load', () => {
    loader.classList.add('disppear')
});

//*navbar
const navbar = document.getElementById("nav");
window.addEventListener("scroll", function (e) {
    const lastPosition = window.scrollY;
    if (lastPosition > 30) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});


//blink text
const texts = ['WELCOME', 'BEM-VINDO ', 'BIENVENIDOS', 'BIENVENU', '欢迎', 'BENVENUTO']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    setTimeout(type, 500)

}())

//hamburger
const primaryNav = document.querySelector('.right-side-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)

    }

    console.log(visibility)
})