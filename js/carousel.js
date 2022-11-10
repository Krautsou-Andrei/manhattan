$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed: 500,
    easing: "linear",
    infinite: true,
    autoplay: false,
    touchThreshold: 10,
    waitForAnimate: false,
    variableWidth: true,
    // adaptiveHeight: true,
    centerPadding: "200px",

    centerMode: true,

    responsive: [
      {
        breakpoint: 1281,
        settings: {
          // arrows: false,
          centerMode: false,
          // variableWidth: false,
          // centerPadding: "40px",
          // slidesToShow: 3,
        },
      },
    ],
  });
});
