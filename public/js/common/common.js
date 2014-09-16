// JavaScript Document
$(document).ready(function(){
	
	setInterval('AutoScroll("#scrollDiv")',3000);
	
	//搜索框
	$("#search-btn").mouseover(function(){
	
		$(this).stop().animate({opacity:0.6});
		
	}).mouseleave(function(){
		
		$(this).stop().animate({opacity: 1});
	
	})
	
	//公共函数，滑入渐隐渐现
	function appFade(arg){
		
		$(arg).mouseover(function(){
		
			$(this).find("img").stop().animate({opacity: 0.6}, 'slow');
	
		}).mouseleave(function(){
			
			$(this).find("img").stop().animate({opacity: 1}, 'slow');
		
		})
	}
	
	//公共函数，摇摆滑动
	function appSlide(arg){
		
		$(arg).mouseover(function(){
	
			$(this).stop().animate({marginLeft:"20px"},'slow');
			
		}).mouseleave(function(){
		
			$(this).stop().animate({marginLeft:"0"},'slow')
		
		})
	}
	
	//头像
	appFade($(".art-img"));
	
	//头像
	appFade($(".member-portrait ul li"));
	
	//清新文字留言头像
	appFade($(".mess-member"));
	
	//光影斑驳 头像
	appFade($(".shadow-portrait"));
	
	//二级页，文章
	appSlide($(".articles ul li"));
	
	//圈子
	$("#circle li").each(function(){
		
		var cName=$(this).find(".c-name");
		var cMember=$(this).find(".c-member");
		var cInfo=$(this).find(".c-info");
		var cNameb=$(this).siblings().find(".c-name");
		var cMemberb=$(this).siblings().find(".c-member");
		var cInfob=$(this).siblings().find(".c-info");
		
		$(this).mouseover(function(){
			
			timoutid = setTimeout(function(){
				cName.animate({marginTop:"5px"});
				cNameb.stop();
				cMember.animate({marginTop:"0"});
				cMemberb.stop();
				cInfo.slideDown("slow");
				cInfob.slideUp("slow");
			},300);
			
		}).mouseleave(function(){
			
			cName.animate({marginTop:"15px"});
			cMember.animate({marginTop:"5px"});
			cInfo.slideUp("slow");
			clearTimeout(timoutid);	
		})
		
	})
	
	//首页导航效果
	appSlide($(".week-hot ul li"));
	
	appSlide($(".au-name a"));
	
	//lomo滑动效果
	function lomo(arg1,arg2){
		
		arg1.mouseover(function(){
		
		$(this).find("div").stop().show().animate({height: arg2}, 'fast');
		$(this).find("span").stop().show();
		
		}).mouseleave(function(){
			
			$(this).find("div").stop().show().animate({height: "0"}, 'fast');
			$(this).find("span").stop().hide();
		
		})
	}
	
})
//音乐长廊
//var lb = setInterval("showAuto()", 3000);
var kd = $(".music-box ul li").width()+1;

var sa = setInterval("showAuto()",3000);	

function showAuto(){
	
	$(".music-box ul li span").each(function(){
		
		$(this).mouseover(function(){
		
			$(this).find("img").stop().animate({opacity: 0.2}, 'slow');
			$(this).parent().siblings().find("img").stop().animate({opacity:1},'slow');
		
		}).mouseleave(function(){
		
			$(this).find("img").stop().animate({opacity: 1}, 'slow');
		
		})
	
	})
	
	var cl = $(".music-box ul li").first();
	
	$(".music-box ul li").first().remove();
	
	$(".music-box ul").append(cl);
	
	//}else{
		
	//	$(".music-box ul").animate({marginLeft:"0"},'slow');
		
	//	kd = 0;
	//}
}

//圈子说说
function AutoScroll(obj){
	$(obj).find("ul:first").animate({
			marginTop:"-85px"
	},500,function(){
			$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
	});
}