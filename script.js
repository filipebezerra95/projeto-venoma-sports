const hamburguer = document.getElementById("hamburguer");
const navMobile = document.getElementById("nav-mobile");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMobile.classList.toggle("active");
});