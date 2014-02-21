//this is going to be models.js for VirtualBulletin

var Mongoose = require('mongoose');

var KeywordSchema = new Mongoose.Schema({
  "Category": String,
  "Labels": [String]
});

var ExhibitSchema = new Mongoose.Schema({
	"id": Number,
	"imageURL": String,
	"description": String,
	"keywords": [KeywordSchema]
});


var UserSchema = new Mongoose.Schema({
  "username": String,
  "password": String,
  "email": String,
  "phone": String,
  "exhibits": [ExhibitSchema], //is this the right way to have an array of exhibit objects?
  "priorities": [String]

});


exports.User = Mongoose.model('User', UserSchema);
exports.Exhibit = Mongoose.model('Exhibit', ExhibitSchema);
exports.Keyword = Mongoose.model('Keyword', KeywordSchema);

