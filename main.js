//Burger

const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#Nav");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav__show");
    console.log(Nav);
});
 
//Typed text

let changingtext = new Typed (".worktitle", {
    strings: ["Web Developer", "Movie Lover", "Fast learner"],
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true,
})

let loading = new Typed (".showloader", {
    strings: ["Loading..."],
    typeSpeed: 50,
    backSpeed: 50, 
    loop: true,
})

//loader

const loader = document.querySelector("#loader")

window.addEventListener ("load", function () {
    setTimeout(() => {
        loader.style.display = "none"
    }, 3000);
})
