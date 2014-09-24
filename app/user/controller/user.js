var _ = require('underscore');
var User = require('../models/user');

var controller=function(req,res,param){  
    this.res=res;  
    this.req=req;
	this.param=param;
};  



exports.controller = controller;