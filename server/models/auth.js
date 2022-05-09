const userModel = require('../models/user');

const auth = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(' ')[1];
		
		userModel
			.fromToken(token)
			.then(user => {
				req.user = user;
				next();
			})
			.catch(next);
	} else {
		next();
	}
};

const requireAuth = (req, res, next) => {
	if (!req.user) {
		next({ statusCode: 401, message: 'Unauthorized' });
	} else {
		next();
	}
};

module.exports = { auth, requireAuth };
