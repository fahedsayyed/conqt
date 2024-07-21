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


// testimonial
    var SwiperTest = new Swiper(".testimonial", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// let SwiperTest = new Swiper(".testimonial", {
//   // spaceBetween: 0,
//   // centeredSlides: true,
//   speed: 4000,
//   autoplay: {
//     delay: 0.8,
//   },
//   loop: true,
//   //   slidesPerView: "auto",
//   slidesPerView: 1,
//   // allowTouchMove: false,
//   // disableOnInteraction: true,
//   // breakpoints: {
//   //   480: {
//   //     slidesPerView: 3,
//   //   },
//   //   768: {
//   //     slidesPerView: 4,
//   //   },
//   //   992: {
//   //     slidesPerView: 6,
//   //   },
//   // },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
