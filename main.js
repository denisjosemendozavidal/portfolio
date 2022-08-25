const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#Nav");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav__show");
    console.log(Nav);
});