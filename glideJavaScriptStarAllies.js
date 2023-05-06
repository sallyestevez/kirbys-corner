// Carousel
const config = {
  type: "carousel",
  focusAt: "center",
  perView: 4,
  animationDuration: 1000,
  autoplay: 2000,
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};

new Glide(".glide", config).mount();
