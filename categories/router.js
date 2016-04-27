'use strict';

const Express = require('express');
const Router = Express.Router();
const getCategories = require('./categories.get.js');
const postCategories = require('./categories.post.js');
const deleteCategories = require('./categories.delete.js');
const putCategories = require('./categories.put.js');

// GET Requests
Router.get('/', function(req, res) {
	getCategories.getCategories(req, res);
});

Router.get('/:id', function(req, res) {
	getCategories.getCategory(req, res);
});

// POST Requests
Router.post('/', function(req, res) {
	postCategories.addCategory(req, res);
});

// DELETE Requests
Router.delete('/:id', function(req, res) {
	deleteCategories.removeCategory(req, res);
});

// PUT Requests
Router.put('/:id', function(req, res) {
	putCategories.updateCategory(req, res);
});


module.exports = Router;
