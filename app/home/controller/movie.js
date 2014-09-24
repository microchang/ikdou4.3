var _ = require('underscore');
var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  

// 电影模块列表页(二级页面)
controller.prototype.movie_ListGet=function(){  
    var res=this.res;  
	
	res.render('home/movie/movieList', {	// 
		title: '首页',
	});
};  

// 电影模块首页(三级页面)
controller.prototype.movie_IndexGet=function(){  
    var res=this.res;  
	
	res.render('home/movie/movieIndex', {	// 
		title: '首页',
	});
}; 

exports.controller = controller;