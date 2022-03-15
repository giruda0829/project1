const btb=$('#back-top-btn')
$(window).scroll(function(){
    if($(window).scrollTop() / 6){
        btb.addClass('opacity')
    }else{
        btb.removeClass('opacity')
    }
});
btb.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500);
})