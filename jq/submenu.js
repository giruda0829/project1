$(window).ready(function(){
  $(".h-nav-menu ul li").mouseover(function () {
    $("#h-top").addClass("active");
    $("#h-nav").addClass("active");
    $("#h-nav .h-nav-logo img.hover").addClass("active");
    $("#h-nav .h-nav-logo img.main").removeClass("active");
  });

  $(".h-nav-menu ul li").mouseout(function () {
    $("#h-top").removeClass("active");
    $("#h-nav").removeClass("active");
    $("#h-nav .h-nav-logo img.hover").removeClass("active");
    $("#h-nav .h-nav-logo img.main").addClass("active");
  });
});
