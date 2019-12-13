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

// 历史版本
$(function () {
    if (set()){
        $("#version").append(set());
        $(".download-last-case").attr("href",updateUrl+ver[ver.length-1].apkName);
    }
});

function set(){
    let string ="";
    for (let i = ver.length-1; i >-1; i--) {
        if(ver[i].time){
            string += "<div class=\"col-sm-12 section-header\">"+"<h4>"+ver[i].ver+" 更新时间 "+ver[i].time+"</h4>"+"<ul>";
        }else {
            string += "<div class=\"col-sm-12 section-header\">"+"<h4>"+ver[i].ver+"</h4>"+"<ul>";
        }
        for (let j = 0; j < ver[i].mark.length; j++) {
            string += "<li>"+ver[i].mark[j]+"</li>";
        }
        string +="<li>\t<a href="+updateUrl+ver[i].apkName+">点击下载</a>\n</li>";
        string +="</ul>"+"</div>"+"<img src=\"images/line.png\" class=\"img-responsive\">";
    }
    return string;
}