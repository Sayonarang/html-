let no = 1;
$(".lt").click(function(){
    no--; //no = no - 1 
    if(no < 1) no = 1; //조건문
    ChangeMain(no);
}); /*클래스가 lt클릭하면 가로안에 */ 
$(".rt").click(function(){
    no++; //no = no + 1 
    if(no > 3) no = 3; 
    ChangeMain(no);
}); 

function ChangeMain(no) {
    let bg = "images/bg_main_visual_pc0" + no + ".jpg";
    let bgimg = "url(" + bg + ")";
    $(".wrap").css("background-image", bgimg);
    $(".bgno").text(no + " / 3");
    $(".main .main-txt").hide();
    $(".main .main-txt-" + no).show();
    $(".lt, .rt").removeClass("active").addClass("activer");
    if( no == 1) $(".lt").removeClass("active");
    if( no == 3) $(".rt").removeClass("active");
}
$(".main-tab .tab").click(function(){  
    (".main-tab .tab").removeClass("active")
    $(this).addClass("active");
    let tno = $(this).attr("data-no");
    $(".link-btns").removeClass("active");
    $(".link-btns-" + tno).addClass("active");
});