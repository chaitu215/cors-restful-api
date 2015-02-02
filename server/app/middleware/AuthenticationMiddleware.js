exports = module.exports = function(app) {

	app.all('/api/user*', function(req, res, next) {
		if (req.isAuthenticated()) return next();

		return res.send(401, 'You shall not pass!');
	});

}
