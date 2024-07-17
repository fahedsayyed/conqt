let SwiperTop = new Swiper(".leader_logo", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 0.8,
  },
  loop: true,
  //   slidesPerView: "auto",
  slidesPerView: 2,
  allowTouchMove: false,
  disableOnInteraction: true,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
  },
});
