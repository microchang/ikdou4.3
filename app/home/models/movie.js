/*
电影信息数据库
*/
var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')
var Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie

