$(window).ready(function () {
  $("#footer>.inner .site-list>p").click(function () {
    $("#footer>.inner").addClass("active");
  });
  $("#footer>.inner.active .site-list>p").click(function () {
    $("#footer>.inner.active").removeClass("active");
  });
});
