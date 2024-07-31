var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.5,
  spaceBetween: 5,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.24,
      spaceBetween: 5,
    },
    
    768: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },
    
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }
});
