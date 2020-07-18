var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper("#swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
});
