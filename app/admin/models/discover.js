/*
发现
*/
var mongoose = require('mongoose')
var DiscoverSchema = require('../schemas/discover')
var Discover = mongoose.model('Discover',DiscoverSchema)

module.exports = Discover