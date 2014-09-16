var _ = require('underscore');
var Movie = require('../models/movie');

var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  
// GET list page
controller.prototype.admin_ListGet=function(){
	var res=this.res;  
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		
		res.render('admin/movie/movieList', { 
			title: '首页',
		});
	})
};  

// Post list page
controller.prototype.admin_ListPost=function(){
	var res=this.res;  
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		res.json({
			movies:movies
		});
	})
};

// admin add movie
controller.prototype.admin_ListAdd=function(){
	var res= this.res; 
	res.render('admin/movie/movieForm', {
		title: 'admin录入信息管理',
		movie:{
			title:'',
			doctor:'',
			type:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	 });
};

// list delete movie
controller.prototype.admin_ListDelete=function(){
	var res=this.res; 
	var id = this.req.body.id;
	if(id){
		Movie.remove({_id:id},function(err, movie){
			if(err){
				console.log(err)
			}else{
				res.json({success:1});
			}
		})
	}
};

// admin update movie
controller.prototype.admin_ListUpdate=function(){
	var res= this.res; 
	var id = this.req.body.id;
	id = this.param;
	console.log(id);
	if(id){
		Movie.findById(id, function(err, movie){
			res.render('admin/movie/movieForm',{
				title: '后台更新页',
				movie: movie
			});
		})
	}
};

// admin update movie
controller.prototype.admin_ListPut=function(){
	var id = this.req.body.movie._id;
	var movieObj = this.req.body.movie;
	var _movie;
	var res= this.res;
	
	if(id != 'undefined'){
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err);
			}
			
			_movie = _.extend(movie,movieObj);
			_movie.save(function(err, movie){
				if(err){
					console.log(err);
				}
				res.redirect('adminListGet');
			});
		})
	}	
	else{
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.type,
			country: movieObj.country,
			language: movieObj.language,
			year:movieObj.year,
			flash: movieObj.flash,
			summary: movieObj.summary,
			poster: movieObj.poster
		})
		_movie.save(function(err, movie){
			if(err){
				console.log(err);
			}
			res.redirect('adminListGet');
		});
	}
};

exports.controller = controller;