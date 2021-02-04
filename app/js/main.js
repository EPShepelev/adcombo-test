$(function () {
  $(".slider__items").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      "<button type='button' class='slick-arrow slick-next'><img src='../images/arrow-next.svg' alt=''></button>",
    prevArrow:
      "<button type='button' class='slick-arrow slick-prev'><img src='../images/arrow-prev.svg' alt=''></button>",
  });
});
