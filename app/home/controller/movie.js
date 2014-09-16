var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 音乐模块列表页(二级页面)
controller.prototype.movie_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/movie/movieList', {	// 跳转到首页
		title: '首页',
	});
};  

// 音乐模块首页(三级页面)
controller.prototype.movie_IndexGet=function(){  
    var res=this.res;  
	
	res.render('home/movie/movieIndex', {	// 跳转到首页
		title: '首页',
	});
}; 

exports.controller = controller;