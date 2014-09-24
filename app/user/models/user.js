/*
用户信息数据库
*/
var mongoose = require('mongoose')
var UserSchema = require('../../admin/schemas/user')
var User = mongoose.model('User',UserSchema)

module.exports = User