(function ($) {
  "use strict";

  // hero area
  $(".hero-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    animation: false,
    speed: 2000,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // project area
  $(".project-active").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // blog area
  $(".blog-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // testimonial area
  $(".testimonial-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // counterUp
  $(".counter").counterUp({
    delay: 5,
    time: 1500,
  });

    // sticky
    var wind = $(window);
    var sticky = $("#sticky-header");
    wind.on("scroll", function () {
      var scroll = wind.scrollTop();
      if (scroll < 100) {
        sticky.removeClass("sticky");
      } else {
        sticky.addClass("sticky");
      }
    });

  // brand area
  $(".brand-carousel").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });


  // testi area
  $(".testi-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });


  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-zoom-in",
    removalDelay: 260,
  });

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // team area
  // brand area
  $(".team-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    animation: true,
    speed: 500,
    fade: false,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Author code here
})(jQuery);
