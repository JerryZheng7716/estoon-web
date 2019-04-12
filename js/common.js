$(function () {

    var isMouseOverDropDowm = false;
    $(".dropdown").click(function () {//防止手机端，点一次展不开菜单栏
        if (isMouseOverDropDowm) {
            $(this).removeClass("open");
            $(this).children('.dropdown-toggle').attr('aria-expanded',false);
            isMouseOverDropDowm=false;
        }
    });

    $(".dropdown").mouseover(function () {
        isMouseOverDropDowm=true;
        $(this).addClass("open");
        $(this).children('.dropdown-toggle').attr('aria-expanded',true);
    });

    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
        $(this).children('.dropdown-toggle').attr('aria-expanded',false);
    })
});