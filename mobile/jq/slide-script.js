$(window).ready(function () {
  /* 0. 변수지정 */
  var visualWrap = $(".h-banner-content"),
    visual = visualWrap.find(".h-content-slide>li"),
    visualCount = visual.length,
    leftBtn = visualWrap.find(".btn>.prev"),
    rightBtn = visualWrap.find(".btn>.next"),
    stopBtn = visualWrap.find(".controls-auto>.slide-stop"),
    startBtn = visualWrap.find(".controls-auto>.slide-start"),
    current = 0,
    setIntervalId;

  /* 1. 슬라이드 위치설정 함수 */
  let visualPos = visual.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  /* 2. timer() 각 함수로 인덱스 번호를 전달
   1초마다 반복 실행 */
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

  /* 3. move() 위치이동 
  호출하는 쪽에서 값을 전달해줘야함 */
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 500);
  }

  /* 4. 배너위에 마우스오버시 일시정지 함수 */
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

  /* 5. 좌우(컨트롤)버튼추가 */
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
