$(window).ready(function () {
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

  /* 사이트맵 오픈-클로즈 */
  $(".open-button").click(function () {
    $("html").addClass("all_scrollFixed");
    $("#menu-open").show();
    $(".close-button").show();
    $(".close-button").click(function () {
      $("#menu-open").hide();
      $(".close-button").hide();
      $("html").removeClass("all_scrollFixed");
    });
  });

  /* 사이트맵 메뉴 클래스 */
  $(".depth1").click(function () {
    $(".depth1 .open-menu").addClass("on");
  }, $(".depth1 .open-menu").removeClass("on"));

  /* footer 관련사이트 */
  $("#footer .site-list>.btn").click(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
});
