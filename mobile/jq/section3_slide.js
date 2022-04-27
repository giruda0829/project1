/* $(window).ready(function () {
    var cnt = [0, 0, 0, 0] //탭버튼별 카운트변수
    var setId = 0 //타이머 설정 변수
    var slideW = 400 //슬라이드 너비
    var c = 0 //current 현재 슬라이드 변수
  
    cnt[c] = 0
  
  
    //TAB EVENT END   /////////////////////////////////////////////////////
  
    //탭 버튼 클릭 이벤트  START ///////////////////////////////////////////
    $(".publication-nav>li>a").each(function (idx) {
      $(this).on({
        click: function () {
          c = idx
          //페이지 버튼 그룹별 초기값 위치
          pageEventFn(cnt[c])
  
          //슬라이드 탭버튼 별 그룹
          $(".publication-content").stop().hide()
          $(".publication-content").eq(c).stop().fadeIn(300)
        },
      })
    })
    //탭 버튼 클릭 이벤트  END ///////////////////////////////////////////////
  
    //섹션4의 메인슬라이드함수
    function mainSlideFn() {
      $(".publication-content .list")
        .eq(c)
        .stop()
        .animate({ left: -(slideW * cnt[c]) }, 300, function () {
          if (cnt[c] > 5) {
            cnt[c] = 0
          }
          if (cnt[c] < 0) {
            cnt[c] = 5
          }
          $(".publication-content .list")
            .eq(c)
            .stop()
            .animate({ left: -(slideW * cnt[c]) }, 0)
        })
      pageEventFn(cnt[c])
    }
  
    //다음카운트함수
    function nextCountFn() {
      cnt[c]++
      mainSlideFn()
    }
    //이전카운트함수
    function prevCountFn() {
      cnt[c]--
      mainSlideFn()
    }
  
    //자동 타이머
    function autoTimerFn() {
      setId[c] = setInterval(nextCountFn, 3000)
    }
    autoTimerFn()
  
    //Page Event
    function pageEventFn(z) {
      if (z > 5) {
        z = 0
      }
      if (z < 0) {
        z = 5
      }
      $(".page-btn").removeClass("addPage")
      $(".page-btn").eq(z).addClass("addPage")
    }
  
    //페이지버튼클릭이벤트 each()
    $(".page-btn").each(function (idx) {
      $(this).on({
        click: function () {
          clearInterval(setId[c])
          cnt[c] = idx
          mainSlideFn()
        },
      })
    })
  
    //다음 슬라이드 버튼 클릭 이벤트
    $(".next-btn").on({
      click: function () {
        if (!$(".slide-wrap").eq(c).is(":animated")) {
          nextCountFn()
        }
      },
    })
  
    //이전 슬라이드 버튼 클릭 이벤트
    $(".prev-btn").on({
      click: function () {
        if (!$(".slide-wrap").eq(c).is(":animated")) {
          prevCountFn()
        }
      },
    })
  
    //다음이전슬라이드 터치이벤트
    $(".slide-container").swipe({
      swipeLeft: function () {
        if (!$(".slide-wrap").eq(c).is(":animated")) {
          clearInterval(setId[c])
          nextCountFn()
        }
      },
      swipeRight: function () {
        if (!$(".slide-wrap").eq(c).is(":animated")) {
          clearInterval(setId[c])
          prevCountFn()
        }
      },
    })
}); */