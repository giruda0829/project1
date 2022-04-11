$(window).ready(function () {
  
  /* 헤더백그라운드 */
  $("#h-slider .sliders").bxSlider({
    mode: "fade",
    minSlides: 1,
    moveSlides: 1,
    pager: false,
    nextSelector: "#h-slider .btn .h-next",
    prevSelector: "#h-slider .btn .h-prev",
    nextText: '<i class="fa-solid fa-arrow-right-long"></i>',
    prevText: '<i class="fa-solid fa-arrow-left-long"></i>',
  });

  /* 섹션1 오른쪽 슬라이더 */
  $("#m-section1 .m-c1-2-slider").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: true,
    pause: 3000,
    pager: false,
    slideWidth: 450,
    nextText: '<i class="fa-solid fa-arrow-right-long"></i>',
    prevText: '<i class="fa-solid fa-arrow-left-long"></i>',
    autoControls:true,
    startText:'<i class="fa-solid fa-play"></i>',
    stopText:'<i class="fa-solid fa-pause"></i>',
  });

  /* 섹션2 슬라이더 */
  $("#m-section2 .forum-list").bxSlider({
    mode: "fade",
    minSlides: 1,
    moveSlides: 1,
    auto: false,
    slideWidth: 450,
    nextText: '<i class="fa-solid fa-chevron-right"></i>',
    prevText: '<i class="fa-solid fa-chevron-left"></i>',
  });

  /* 푸터 사이트 목록 슬라이더 */
  $("#foot-banner .view .list").bxSlider({
    mode:'fade',
    minSlides: 1,
    moveSlides: 1,
    auto: true,
    pause: 3000,
    pager: false,
    slideWidth: 450,
    nextText: '<i class="fa-solid fa-chevron-right"></i>',
    prevText: '<i class="fa-solid fa-chevron-left"></i>',
    autoControls:true,
    startText:'<i class="fa-solid fa-play"></i>',
    stopText:'<i class="fa-solid fa-pause"></i>',
    autoControlsCombine:true,
  });
});
