$(window).ready(function () {
  
    /* publication1-1 */
    $(".publication-content .list").bxSlider({
      mode: "fade",
      minSlides: 1,
      moveSlides: 1,
      pager: false,
      slideWidth: 400,
      nextText: '<i class="fa-solid fa-chevron-right"></i>',
      prevText: '<i class="fa-solid fa-chevron-left"></i>',
    });
});