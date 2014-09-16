// JavaScript Document

//music box
var t = n = 0, count;
$(document).ready(function(){	
	count=$("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('title'));
	$("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
	
	$("#music-lomo li").each(function(index){
		
		$(this).click(function(){
			
			var i = index;
			n = i;
			if (i >= count) return;
			$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('title'));
			$("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
			$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
			$("#music-lomo").css("background","");
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
		
		})
		
	})
	
	t = setInterval("showAuto()", 10000);
	$("#music-lomo").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 10000);});
})

function showAuto(){
	n = n >=(count - 1) ? 0 : ++n;
	$("#music-lomo li").eq(n).trigger('click');
}

function lomo(arg1,arg2){
		
	arg1.mouseover(function(){
	
		$(this).find("p").stop().show().animate({height: arg2}, 'fast');
		$(this).find("a").stop().show();
		
	}).mouseleave(function(){
		
		$(this).find("p").stop().show().animate({height: "0"}, 'fast');
		$(this).find("a").stop().hide();
	})
}

//音乐治疗 lomo滑动效果
lomo($(".music-img"),"228px");
/*$(".music-img").mouseover(function(){
	
	$(this).find("img").stop().animate({opacity: 0.6}, 'slow');
	$(this).find(".music-play img").stop().animate({opacity: 1}, 'slow');
	$(this).find(".music-play").stop().show();
	$(this).find(".love-icon").stop().show();
	$(this).find(".share-icon").stop().show();
	
}).mouseleave(function(){
	
	$(this).find("img").stop().animate({opacity: 1}, 'slow');
	$(this).find(".music-play").stop().hide();
	$(this).find(".love-icon").stop().hide();
	$(this).find(".share-icon").stop().hide();

})*/

$(".music:gt(21)").hide();

//延迟加载
$("#more").click(function(){

	$(".music:gt(21)").show();
	
	$('.con-box').masonry({
		// options
		itemSelector : '.music',
		
		columnWidth : 252
	});

})
