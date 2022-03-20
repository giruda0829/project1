$(document).ready(function () {

$(".notice").click(function(){
    $("#notice").addClass('active')
    $("#tender").removeClass('active')
    $("#recruit").removeClass('active')
    $("#task").removeClass('active')
  });
  $(".tender").click(function(){
    $("#notice").removeClass('active')
    $("#tender").addClass('active')
    $("#recruit").removeClass('active')
    $("#task").removeClass('active')
  });
  $(".recruit").click(function(){
    $("#notice").removeClass('active')
    $("#tender").removeClass('active')
    $("#recruit").addClass('active')
    $("#task").removeClass('active')
  });
  $(".task").click(function(){
    $("#notice").removeClass('active')
    $("#tender").removeClass('active')
    $("#recruit").removeClass('active')
    $("#task").addClass('active')
  });
});

$(document).ready(function () {

$(".notice").click(function(){
    $(".notice a").addClass('active')
    $(".tender a").removeClass('active')
    $(".recruit a").removeClass('active')
    $(".task a").removeClass('active')
  });
  $(".tender").click(function(){
    $(".notice a").removeClass('active')
    $(".tender a").addClass('active')
    $(".recruit a").removeClass('active')
    $(".task a").removeClass('active')
  });
  $(".recruit").click(function(){
    $(".notice a").removeClass('active')
    $(".tender a").removeClass('active')
    $(".recruit a").addClass('active')
    $(".task a").removeClass('active')
  });
  $(".task").click(function(){
    $(".notice a").removeClass('active')
    $(".tender a").removeClass('active')
    $(".recruit a").removeClass('active')
    $(".task a").addClass('active')
  });
});