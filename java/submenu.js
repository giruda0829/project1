$(document).ready(function () {

  $(".h-nav-menu ul li").mouseover(function () {
    $("#h-top").addClass("hover");
    $("#h-nav").addClass("hover");
  });
  
  $(".h-nav-menu ul li").mouseout(function () {
    $("#h-top").removeClass("hover");
    $("#h-nav").removeClass("hover");
  });
});
