var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 发现模块列表页(二级页面)
controller.prototype.discover_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/discover/discoverList', {	// 跳转到发现首页
		title: '发现',
	});
};  


exports.controller = controller;