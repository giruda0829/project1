
/* title tap */
$(".briefs").click(function(){
    $(".briefs a").addClass('active');
    $("#publication1").addClass('active');
    $(".publication a").removeClass('active');
    $("#publication2").removeClass('active');
    $(".report a").removeClass('active');
    $("#publication3").removeClass('active');
});
$(".publication").click(function(){
    $(".briefs a").removeClass('active');
    $("#publication1").removeClass('active');
    $(".publication a").addClass('active');
    $("#publication2").addClass('active');
    $(".report a").removeClass('active');
    $("#publication3").removeClass('active');
});
$(".report").click(function(){
    $(".briefs a").removeClass('active');
    $("#publication1").removeClass('active');
    $(".publication a").removeClass('active');
    $("#publication2").removeClass('active');
    $(".report a").addClass('active');
    $("#publication3").addClass('active');
});

/* publication1 tap */
$("#publication1 .all").click(function(){
    $("#publication1 .all a").addClass('active');
    $("#publication1-1").addClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .issue").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").addClass('active');
    $("#publication1-2").addClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .policy").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").addClass('active');
    $("#publication1-3").addClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .statis").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").addClass('active');
    $("#publication1-4").addClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .technology").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").addClass('active');
    $("#publication1-5").addClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .Apple").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").addClass('active');
    $("#publication1-6").addClass('active');
    $("#publication1 .future a").removeClass('active');
    $("#publication1-7").removeClass('active');
});
$("#publication1 .future").click(function(){
    $("#publication1 .all a").removeClass('active');
    $("#publication1-1").removeClass('active');
    $("#publication1 .issue a").removeClass('active');
    $("#publication1-2").removeClass('active');
    $("#publication1 .policy a").removeClass('active');
    $("#publication1-3").removeClass('active');
    $("#publication1 .statis a").removeClass('active');
    $("#publication1-4").removeClass('active');
    $("#publication1 .technology a").removeClass('active');
    $("#publication1-5").removeClass('active');
    $("#publication1 .Apple a").removeClass('active');
    $("#publication1-6").removeClass('active');
    $("#publication1 .future a").addClass('active');
    $("#publication1-7").addClass('active');
});

/* publication2 tap */
$("#publication2 .all").click(function(){
    $("#publication2 .all a").addClass('active');
    $("#publication2-1").addClass('active');
    $("#publication2 .newsletter a").removeClass('active');
    $("#publication2-2").removeClass('active');
    $("#publication2 .annual a").removeClass('active');
    $("#publication2-3").removeClass('active');
    $("#publication2 .lnl a").removeClass('active');
    $("#publication2-4").removeClass('active');
});
$("#publication2 .newsletter").click(function(){
    $("#publication2 .all a").removeClass('active');
    $("#publication2-1").removeClass('active');
    $("#publication2 .newsletter a").addClass('active');
    $("#publication2-2").addClass('active');
    $("#publication2 .annual a").removeClass('active');
    $("#publication2-3").removeClass('active');
    $("#publication2 .lnl a").removeClass('active');
    $("#publication2-4").removeClass('active');
});
$("#publication2 .annual").click(function(){
    $("#publication2 .all a").removeClass('active');
    $("#publication2-1").removeClass('active');
    $("#publication2 .newsletter a").removeClass('active');
    $("#publication2-2").removeClass('active');
    $("#publication2 .annual a").addClass('active');
    $("#publication2-3").addClass('active');
    $("#publication2 .lnl a").removeClass('active');
    $("#publication2-4").removeClass('active');
});
$("#publication2 .lnl").click(function(){
    $("#publication2 .all a").removeClass('active');
    $("#publication2-1").removeClass('active');
    $("#publication2 .newsletter a").removeClass('active');
    $("#publication2-2").removeClass('active');
    $("#publication2 .annual a").removeClass('active');
    $("#publication2-3").removeClass('active');
    $("#publication2 .lnl a").addClass('active');
    $("#publication2-4").addClass('active');
});

/* publication3 tap */
$("#publication3 .all").click(function(){
    $("#publication3 .all a").addClass('active');
    $("#publication3-1").addClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .prediction").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").addClass('active');
    $("#publication3-2").addClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .planning").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").addClass('active');
    $("#publication3-3").addClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .business").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").addClass('active');
    $("#publication3-4").addClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .result").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").addClass('active');
    $("#publication3-5").addClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .evaluation").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").addClass('active');
    $("#publication3-6").addClass('active');
    $("#publication3 .feasibility a").removeClass('active');
    $("#publication3-7").removeClass('active');
});
$("#publication3 .feasibility").click(function(){
    $("#publication3 .all a").removeClass('active');
    $("#publication3-1").removeClass('active');
    $("#publication3 .prediction a").removeClass('active');
    $("#publication3-2").removeClass('active');
    $("#publication3 .planning a").removeClass('active');
    $("#publication3-3").removeClass('active');
    $("#publication3 .business a").removeClass('active');
    $("#publication3-4").removeClass('active');
    $("#publication3 .result a").removeClass('active');
    $("#publication3-5").removeClass('active');
    $("#publication3 .evaluation a").removeClass('active');
    $("#publication3-6").removeClass('active');
    $("#publication3 .feasibility a").addClass('active');
    $("#publication3-7").addClass('active');
});