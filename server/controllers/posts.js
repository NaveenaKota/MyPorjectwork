const express = require('express');
const app = express.Router();

const postModel = require('../models/post');

const CREATED_STATUS = 201;

app
	.get('/', (req, res, next) => {
		postModel
			.getList()
			.then(posts => res.json({ success: true, errors: [], data: posts }))
			.catch(next);
	})
	.post('/', (req, res, next) => {
		postModel
			.create(req.body)
			.then(post =>
				res
					.status(CREATED_STATUS)
					.json({ success: true, errors: [], data: post })
			)
			.catch(next);
	})
	.delete('/:id', (req, res, next) => {
		postModel
			.remove(req.params.id)
			.then(post => res.json({ success: true, errors: [], data: post }))
			.catch(next);
	})
	.patch('/:id', (req, res, next) => {
		postModel
			.update(req.params.id, req.body)
			.then(post => res.json({ success: true, errors: [], data: post }))
			.catch(next);
	})
	.post('/seed', (req, res, next) => {
		postModel
			.seed()
			.then(post =>
				res
					.status(CREATED_STATUS)
					.json({ success: true, errors: [], data: post })
			)
			.catch(next);
	});

module.exports = app;
