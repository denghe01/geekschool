require.config({
	paths: {
		"jquery": "jquery-3.0.0.min",
		"index": "index",
	}
});
require(['jquery'],function ($) {
	// index.js内容
	$(document).ready(function(){

  // 课程轮播器
    var i = 0;
    $('div#wowslider-container2 li:lt(3)').clone().appendTo($('div#wowslider-container2>ul'));
    var size1 = $('div#wowslider-container2>ul>li').size();
    $('div#wowslider-container2>a.btn-l').click(function(){
      if(i == 0){
        i = (size1-3);
        $('div#wowslider-container2>ul').css('left',-i*186);
      }
      i--;
      $('div#wowslider-container2>ul').stop().animate({left: -i*186},300,'swing');
    });
    $('div#wowslider-container2>a.btn-r').click(function(){
      if(i == (size1-3)){
        i = 0;
        $('div#wowslider-container2>ul').css('left',i*186);
      }
      i++;
      $('div#wowslider-container2>ul').stop().animate({left: -i*186},300,'swing');
    });
    $('div#wowslider-container2').mouseenter(function(){
      $('div#wowslider-container2>a').stop().fadeIn(400);
    });
    $('div#wowslider-container2').mouseleave(function(){
      $('div#wowslider-container2>a').stop().fadeOut(400);
    });

  // 推荐课程动画效果
    $('div.con-2nd-menu ul.menu1 li:lt(4)').css("z-index","150");
    $('div.con-2nd-menu ul.menu1 li:gt(3)').css("z-index","100");
    $('div.con-2nd-menu ul.menu2 li:lt(4)').css("z-index","250");
    $('div.con-2nd-menu ul.menu2 li:gt(3)').css("z-index","200");
    $('div.con-2nd-menu ul.menu3 li:lt(4)').css("z-index","350");
    $('div.con-2nd-menu ul.menu3 li:gt(3)').css("z-index","300");
    $('div.con-2nd-menu ul.menu4 li:lt(4)').css("z-index","450");
    $('div.con-2nd-menu ul.menu4 li:gt(3)').css("z-index","400");
    $('div.con-2nd-menu ul.menu5 li:lt(4)').css("z-index","550");
    $('div.con-2nd-menu ul.menu5 li:gt(3)').css("z-index","500");
    $('div.con-2nd-menu ul.menu6 li:lt(4)').css("z-index","650");
    $('div.con-2nd-menu ul.menu6 li:gt(3)').css("z-index","600");
    $('div.con-2nd-menu>ul>li').mouseenter(function(){
      $(this).addClass('selected');
      $('.selected div.li-art>p').stop().slideDown();
      $('.selected div.li-bg-con').stop().fadeIn();
      $('.selected div.li-footer-left-2').stop().slideDown(400);
      $('.selected div.li-footer-right-1').stop().slideDown(400);
    });
    $('div.con-2nd-menu>ul>li').mouseleave(function(){
      $('.selected div.li-art>p').stop().slideUp();
      $('.selected div.li-bg-con').stop().fadeOut();
      $('.selected div.li-footer-left-2').stop().slideUp(400);
      $('.selected div.li-footer-right-1').stop().slideUp(400);
      $(this).removeClass('selected');
    });

  // 推荐课程Tab切换
    $('div.con-2nd-title>div').mouseenter(function(){
      $('div.con-2nd-title>div.title-sel').removeClass('title-sel');
      $(this).addClass('title-sel');
      var tabIndex = $(this).index();
      $('div.con-2nd-menu>ul.menu-sel').removeClass('menu-sel');
      if (tabIndex == 0) {
        $('div.con-2nd-menu>ul:eq(0)').addClass('menu-sel');
      }else if (tabIndex == 1) {
        $('div.con-2nd-menu>ul:eq(1)').addClass('menu-sel');
      } else if (tabIndex == 2) {
        $('div.con-2nd-menu>ul:eq(2)').addClass('menu-sel');
      } else if (tabIndex == 3) {
        $('div.con-2nd-menu>ul:eq(3)').addClass('menu-sel');
      } else if (tabIndex == 4) {
        $('div.con-2nd-menu>ul:eq(4)').addClass('menu-sel');
      } else if (tabIndex == 5) {
        $('div.con-2nd-menu>ul:eq(5)').addClass('menu-sel');
      }
    });

  // 职业路径hover效果
    $('div.con-3nd-menu>div>div').mouseenter(function(){
      $(this).addClass('select');
    }).mouseleave(function(){
      $('div.con-3nd-menu>div>div.select').removeClass('select');
    });

  // 知识体系图hover效果
    $('div.con-4th-menu-con').mouseenter(function(){
      $(this).addClass('select');
    }).mouseleave(function(){
      $('div.con-4th-menu>.select').removeClass('select');
    });

  // 精品课程系列hover效果
    $('div.con-5th-menu-con').mouseenter(function(){
      $(this).addClass('select')
    }).mouseleave(function(){
      $(this).removeClass('select')
    });

  // 战略合作企业
    var n = 0;
    $('ul.con-7th-pic-con>li:lt(6)').clone().appendTo($('ul.con-7th-pic-con'));
    var size2 = $('ul.con-7th-pic-con>li').size();
    $('div.con-7th-menu').mouseenter(function(){
      $('div.con-7th-menu>div.btn').stop().fadeIn(400);
    }).mouseleave(function(){
      $('div.con-7th-menu>div.btn').stop().fadeOut(400);
    })
    $('div.con-7th-menu>div.btn-l').click(function(){
      n--;
      if (n == -1) {
        $('ul.con-7th-pic-con').css('left',-(size2-6)*159.66);
        n = size2-7;
      }
      $('ul.con-7th-pic-con').stop().animate({left: -n*159.66},300,'swing');
    })
    $('div.con-7th-menu>div.btn-r').click(function(){
      n++;
      if (n == size2-5) {
        $('ul.con-7th-pic-con').css('left',0);
        n = 1;
      }
      $('ul.con-7th-pic-con').stop().animate({left: -n*159.66},300,'swing');
    });

  // 媒体报道
    var n = 0;
    $('ul.con-8th-pic-con>li:lt(6)').clone().appendTo($('ul.con-8th-pic-con'));
    var size2 = $('ul.con-8th-pic-con>li').size();
    $('div.con-8th-menu').mouseenter(function(){
      $('div.con-8th-menu>div.btn').stop().fadeIn(400);
    }).mouseleave(function(){
      $('div.con-8th-menu>div.btn').stop().fadeOut(400);
    })
    $('div.con-8th-menu>div.btn-l').click(function(){
      n--;
      if (n == -1) {
        $('ul.con-8th-pic-con').css('left',-(size2-6)*159.66);
        n = size2-7;
      }
      $('ul.con-8th-pic-con').stop().animate({left: -n*159.66},300,'swing');
    })
    $('div.con-8th-menu>div.btn-r').click(function(){
      n++;
      if (n == size2-5) {
        $('ul.con-8th-pic-con').css('left',0);
        n = 1;
      }
      $('ul.con-8th-pic-con').stop().animate({left: -n*159.66},300,'swing');
    });

  // 顶部导航
    $('div.nav-menu-con').mouseenter(function(){
      $('div.nav-menu').stop().fadeIn(200);
    }).mouseleave(function(){
      $('div.nav-menu').stop().fadeOut(200);
    })
    $('div.nav-con-right').mouseenter(function(e){
      e.stopPropagation();
    })
    $('div.blank-r').mouseenter(function(e){
      e.stopPropagation();
    });

  // 侧面导航
    $('div.first-con-left>ul>a').mouseenter(function(){
      $('div.first-con-left>ul>a div').css('display','none');
      index1 = $(this).index();
      if (index1 == 0) {
        $('.first-con-menu-1').css('display','block');
      } else if (index1 == 1) {
        $('.first-con-menu-2').css('display','block');
      } else if (index1 == 2) {
        $('.first-con-menu-3').css('display','block');
      } else if (index1 == 3) {
        $('.first-con-menu-4').css('display','block');
      } else if (index1 == 4) {
        $('.first-con-menu-5').css('display','block');
      } else if (index1 == 5) {
        $('.first-con-menu-6').css('display','block');
      } else if (index1 == 6) {
        $('.first-con-menu-7').css('display','block');
      } else if (index1 == 7) {
        $('.first-con-menu-8').css('display','block');
      } else if (index1 == 8) {
        $('.first-con-menu-9').css('display','block');
      } else if (index1 == 9) {
        $('.first-con-menu-10').css('display','block');
      }
    }).mouseleave(function(){
      $('div.first-con-left>ul>a div').css('display','none');
    });

  // 滑动事件
    $(window).scroll(function(){
      var t = $(window).scrollTop();
      if (t > 100) {
        $('div.to-top').stop().fadeIn(200);
      } else {
        $('div.to-top').stop().fadeOut(200);
      }
    });
    $('div.to-top').click(function(){
      $("body,html").animate({scrollTop:0},300)
    });
  });
});