$(window).ready(function () {
  var visualWrap = $(".h-banner-content"),
    visual = visualWrap.find(".h-content-slide>li"),
    visualCount = visual.length,
    leftBtn = visualWrap.find(".btn>.prev"),
    rightBtn = visualWrap.find(".btn>.next"),
    stopBtn = visualWrap.find(".controls-auto>.slide-stop"),
    startBtn = visualWrap.find(".controls-auto>.slide-start"),
    current = 0,
    setIntervalId;

  let visualPos = visual.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  timer();

  function timer() {
    setIntervalId = setInterval(function () {
      var prev = visual.eq(current);
      move(prev, 0, "-100%");
      current++;
      if (current == visual.length) {
        current = 0;
      }
      var next = visual.eq(current);
      move(next, "100%", "0%");
    }, 3000);
  }

  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 500);
  }

  stopBtn.click(
    function () {
        clearInterval(setIntervalId);
        stopBtn.removeClass('active');
        startBtn.addClass('active');
    }
  );
  startBtn.click(
    function () {
        timer();
        stopBtn.addClass('active');
        startBtn.removeClass('active');
    }
  );

  rightBtn.click(function () {
    var prev = visual.eq(current);
    move(prev, 0, "-100%");
    current++;
    if (current == visualCount) current = 0;
    var next = visual.eq(current);
    move(next, "100%", "0%");
    cnt(current);
    return false;
  });

  leftBtn.click(function () {
    var prev = visual.eq(current);
    move(prev, 0, "100%");
    current--;
    console.log(current);
    if (current == -visualCount) current = 0;
    var next = visual.eq(current);
    move(next, "-100%", "0%");
    cnt(current);
    return false;
  });
});
