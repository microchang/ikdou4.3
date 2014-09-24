var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 圈子模块列表页(二级页面)
controller.prototype.quan_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/quan/quanList', {	// 跳转到圈子列表页
		title: '圈子',
	});
};  
// 圈子模块详情页(三级页面)
controller.prototype.quan_IndexGet=function(){  
    var res=this.res;  
	
	res.render('home/quan/quanIndex', {	// 
		title: '圈子详情页',
	});
}; 

exports.controller = controller;