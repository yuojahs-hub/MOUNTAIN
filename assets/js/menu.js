const navMobile = document.querySelector(".header_nav_mobile");
const navMenu = document.querySelector(".header_nav");

navMobile.addEventListener("click", (e) => {
    e.preventDefault();
    navMenu.classList.toggle("show");
});
