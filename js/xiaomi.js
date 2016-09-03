$(function(){
    //导航
    $(".nav-list ul li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var _index=$(this).index();
        $(".down-menu").eq(_index).fadeIn();
    },function(){
        $(this).removeClass("on");
        var _index=$(this).index();
        $(".down-menu").eq(_index).fadeOut();
    });
    //轮播
    var timer=null;
    var num=0;
    autoPlay();//自动播放
    function autoPlay(){
        timer=setInterval(function(){
            num++;
            if(num>4){num=0;}
            move();
        },2000);
    }
    function move(){
        $(".circle ul li").eq(num).addClass("check").siblings("li").removeClass("check");
        $(".banner li").eq(num).fadeIn().siblings().fadeOut();
    }
    $(".banner li").hover(function(){
        clearInterval(timer);
    },function(){
        autoPlay();
    });
    $(".circle ul li").hover(function(){
        clearInterval(timer);
        $(this).addClass("check").siblings("li").removeClass("check");
        var now=$(this).index();
        $(".banner li").eq(now).fadeIn().siblings().fadeOut();
        num=now;
    });
    $(".btn-right").hover(function(){
        clearInterval(timer);
    },function(){
        autoPlay();
    });
    $(".btn-left").hover(function(){
        clearInterval(timer);
    },function(){
        autoPlay();
    });
    $(".btn-right").click(function(){
        num++;
        if(num>4){num=0;}
        move();
    });
    $(".btn-left").click(function(){
        num--;
        if(num<0){num=4;}
        move();
    })


    //banner左边
    $(".left-bg ul li").hover(function(){
        var _index=$(this).index();
        $(".show-left").eq(_index).show().siblings("div").hide();
    },function(){
        var _index=$(this).index();
        $(".show-left").eq(_index).hide();
    })
});
