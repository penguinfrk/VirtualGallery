//var profiles = require('../fakeDatabase.json');
var models = require('../models');

exports.displayPage = function(req, res){
  //res.render('visitGallery', profiles[0].exhibits[0]);
	models.User
		.find()
		.exec(renderProjects)

	function renderProjects(err, users) {
		if (err) console.log(err);
		console.log(users);
		res.render('visitGallery', users[0].exhibits[0]);
	}
  //res.render('visitGallery', profiles.users[0].exhibits[0]);
}