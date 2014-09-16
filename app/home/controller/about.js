var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 关于
controller.prototype.about_AboutGet=function(){  
    var res=this.res;  
	
	res.render('home/about/about', {	// 跳转到关于蝌蚪
		title: '关于Ikdou',
	});
};  

// 关于
controller.prototype.about_TeamGet=function(){  
    var res=this.res;  
	
	res.render('home/about/team', {	// 跳转到关于蝌蚪
		title: '关于Ikdou',
	});
};  

exports.controller = controller;  