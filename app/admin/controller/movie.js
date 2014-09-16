var _ = require('underscore');
var Movie = require('../models/movie');

var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  
// GET list page
controller.prototype.movie_ListGet=function(){
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
controller.prototype.movie_ListPost=function(){
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

// movie add movie
controller.prototype.movie_ListAdd=function(){
	var res= this.res; 
	res.render('admin/movie/movieForm', {
		title: 'movie录入信息管理',
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
controller.prototype.movie_ListDelete=function(){
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

// movie update movie
controller.prototype.movie_ListUpdate=function(){
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

// movie update movie
controller.prototype.movie_ListPut=function(){
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
				res.redirect('movieListGet');
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
			res.redirect('movieListGet');
		});
	}
};

exports.controller = controller;