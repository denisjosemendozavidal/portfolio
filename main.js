const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#Nav");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav__show");
    console.log(Nav);
});

var changingtext = new Typed (".worktitle", {
    strings: ["Web Developer", "Movie Lover", "Fast learner"],
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true,
})