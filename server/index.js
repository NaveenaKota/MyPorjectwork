require('dotenv').config();
import express, { json } from 'express';
import cors from 'cors';

import usersController from './controllers/users';
import postsController from './controllers/posts';

import { auth, requireAuth } from './models/auth';

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
	.use(json())
	.use(auth)
	.use('/api/users', usersController)
	.use('/api/posts', requireAuth, postsController)
	.use(err)
	.listen(port, () => {
		console.log(`Listening @ http://localhost:${port}`);
	});
