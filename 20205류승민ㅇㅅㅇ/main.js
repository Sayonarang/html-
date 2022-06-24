$(document).ready(function(){ /* 이 문서가 실행 되면 밑에 실행*/
    slide1();
    slide2();
})

function slide1(){
    $(".s_mainbox").stop().animate({
        left:- 1200
    },3000,"swing");
}

function slide2(){
    $(".right1").stop().animate({
        bottom:- 1200
    },3000,"swing");
}