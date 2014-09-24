var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 音乐模块列表页(二级页面)
controller.prototype.music_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/music/musicList', {	// 
		title: '音乐模块列表页',
	});
};  

// 音乐模块首页(三级页面)
controller.prototype.music_IndexGet=function(){  
    var res=this.res;  
	
	res.render('home/music/musicIndex', {	// 
		title: '音乐详情页',
	});
}; 

exports.controller = controller;