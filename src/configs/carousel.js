export const carouselConfig = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1.3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.3,
      },
    },
  ],
};
