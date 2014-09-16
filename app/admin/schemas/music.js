var mongoose = require('mongoose')

var MusicSchema = new mongoose.Schema({
	name: String,		// ��������
	title: String,		// ���ֱ���
	author: String,		// ����
	type: String,		// ����
	tag: String,		// ��ǩ
	language: String,	// ����
	country: String,	// ����
	flash: String,		// ��ַ
	imgUrl: String,		// ����ͼƬ����
	year: String,		// ���
	content: String,	// ������������
	meta: {				// ¼��ʱ��
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




