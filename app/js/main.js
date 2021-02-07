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

  $(".accordeon__item-title").on("click", function () {
    $(".accordeon__item").removeClass("accordeon__item-active");
    $(this).parent().addClass("accordeon__item-active");
  });

  function setEqualHeight(columns) {
    let tallestcolumn = 0;
    columns.each(function () {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  $(document).ready(function () {
    setEqualHeight($(".high-resolution__wrapper > section"));
  });
});
