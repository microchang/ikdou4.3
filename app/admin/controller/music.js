var _ = require('underscore');
var Music = require('../models/music');

var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  
// GET list page
controller.prototype.music_ListGet=function(){
	var res=this.res;  
	Music.fetch(function(err,music){
		if(err){
			console.log(err);
		}
		
		res.render('admin/music/musicList', { 
			title: '首页',
		});
	})
};  

// Post list page
controller.prototype.music_ListPost=function(){
	var res=this.res;  
	Music.fetch(function(err,music){
		if(err){
			console.log(err);
		}
		res.json({
			music:music
		});
	})
};

// admin add music
controller.prototype.music_ListAdd=function(){
	var res= this.res; 
	res.render('admin/music/musicForm', {
		title: '音乐录入信息管理',
		music:{
			name:'',
			title:'',
			author:'',
			type:'',
			tag:'',
			language:'',
			country:'',
			year:'',
			imgUrl:'',
			flash:'',
			content:''
		}
	 });
};

// list delete music
controller.prototype.music_ListDelete=function(){
	var res=this.res; 
	var id = this.req.body.id;
	if(id){
		Music.remove({_id:id},function(err, music){
			if(err){
				console.log(err)
			}else{
				res.json({success:1});
			}
		})
	}
};

// admin update music
controller.prototype.music_ListUpdate=function(){
	var res= this.res; 
	var id = this.req.body.id;
	id = this.param;
	console.log(id);
	if(id){
		Music.findById(id, function(err, music){
			res.render('admin/music/musicForm',{
				title: '后台更新页',
				music: music
			});
		})
	}
};

// admin update music
controller.prototype.music_ListPut=function(){
	var id = this.req.body.music._id;
	var musicObj = this.req.body.music;
	var _music;
	var res= this.res;
	
	if(id != 'undefined'){
		Music.findById(id,function(err,music){
			if(err){
				console.log(err);
			}
			
			_music = _.extend(music,musicObj);
			_music.save(function(err, music){
				if(err){
					console.log(err);
				}
				res.redirect('musicListGet');
			});
		})
	}	
	else{
		_music = new music({
			name:musicObj.name,
			title:musicObj.title,
			author:musicObj.author,
			type:musicObj.type,
			tag:musicObj.tag,
			language:musicObj.language,
			country:musicObj.country,
			year:musicObj.year,
			imgUrl:musicObj.imgUrl,
			flash:musicObj.flash,
			content:musicObj.content
		})
		_music.save(function(err, music){
			if(err){
				console.log(err);
			}
			res.redirect('musicListGet');
		});
	}
};

exports.controller = controller;