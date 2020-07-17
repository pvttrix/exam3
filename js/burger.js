document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("clicked");
});
