var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 发现模块列表页(二级页面)
controller.prototype.discover_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/discover/discoverList', {	// 跳转到发现列表页
		title: '发现',
	});
};  
// 发现模块首页(三级页面)
controller.prototype.discover_IndexGet=function(){  
    var res=this.res;  
	
	res.render('home/discover/discoverIndex', {	// 
		title: '发现详情页',
	});
}; 

exports.controller = controller;