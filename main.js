const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".navigation-primary");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("opened");
});
