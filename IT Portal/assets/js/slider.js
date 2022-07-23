$(document).ready(function(){
  $('.header__program-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 600,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      responsive: [  
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                  }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                  }
              },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                  }
          }
      ]
  });
});

$(document).ready(function(){
  $('.reviews__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      arrows: true,
      infinite: true,
      speed: 600,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      prevArrow: $('.reviews__slider-prev'),
      nextArrow: $('.reviews__slider-next'),
      responsive: [  
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                  }
              },
      ]
  });
});