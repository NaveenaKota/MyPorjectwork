require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');

const { auth, requireAuth } = require('./models/auth');

const app = express();
const port = process.env.PORT || 3000;

const err = (err, req, res, next) => {
	console.error(err);
	res
		.status(err.statusCode || 500)
		.send({ errors: [err.message ?? 'Internal server error'] });
};

app
	.use(cors())
	.use(express.json())
	.use(auth)
	.use('/api/users', usersController)
	.use('/api/posts', requireAuth, postsController)
	.use(err)
	.listen(port, () => {
		console.log(`Listening @ http://localhost:${port}`);
	});
