var mongoose = require('mongoose')

var MusicSchema = new mongoose.Schema({
	name: String,		// 音乐名字
	title: String,		// 音乐标题
	author: String,		// 作者
	type: String,		// 类型
	tag: String,		// 标签
	language: String,	// 语言
	country: String,	// 国籍
	flash: String,		// 地址
	imgUrl: String,		// 音乐图片链接
	year: String,		// 年代
	content: String,	// 清新文字内容
	meta: {				// 录入时间
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
})

MusicSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}
	next()
})

MusicSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function(id, cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
}

module.exports = MusicSchema




