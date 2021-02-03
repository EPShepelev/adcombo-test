$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      "<button type='button' class='slick-arrow slick-next'><img src='../images/arrow-next.svg' alt='slider next arrow'></button>",
    prevArrow:
      "<button type='button' class='slick-arrow slick-prev'><img src='../images/arrow-prev.svg' alt='slider prev arrow'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
