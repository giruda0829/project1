$(function () {
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
  $("open-manu-all .lnb1").click(
    function () {
      $("open-manu-all .lnb1").addClass("on");
      /* console.log(); */
    },
    function () {
      $("open-manu-all .lnb1").removeClass("on");
    }
  );
});
