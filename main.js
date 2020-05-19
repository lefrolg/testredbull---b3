 $(document).ready(function(){
    $('.slider').bxSlider({
      auto: true,
      pause: 6000,
    });
  });

$(document).ready(function(){
    $('.talk_slider').bxSlider({
      auto: true,
      pause: 6000,
      controls: false,
    });
  });

  $(document).ready(function(){
    $('.partners_slider').bxSlider({
      auto: true,
      pause: 2000,
      controls: false,
      pager: false,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 4,
      slideWidth: 1000,
      shrinkItems: true,

    });
  });


