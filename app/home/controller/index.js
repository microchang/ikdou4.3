var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 首页
controller.prototype.index_IndexGet=function(){  
    var res=this.res;  
	
	res.render('index', {	// 跳转到首页
		title: '首页',
	});
};  


exports.controller = controller;  