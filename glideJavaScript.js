// Carousel
const config = {
  type: "carousel",
  perView: 3,
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
