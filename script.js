function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-100%)"
}

// Animation d'écriture
var typed = new Typed(".typewriter-text", {
    strings: ["DESSINATEUR", "DESIGNER", "DEVELOPEUR", "PEINTRE", "GAMEUR"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMenu() {
    const menu = document.querySelector('.dropdown');
    menu.classList.toggle('open');
}

// Ta fonction switchPage reste la même, 
// mais elle est maintenant appelée aussi par le menu mobile
function switchPage(sectionId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}