'use strict';

const Validator = require('../common/validator.js');
const DBHelpers = require('../common/databaseHelpers.js');

module.exports.addCategory = function(req, res) {
	const categoryData = [
		{ field: 'name', input: req.body.name, rules: { notEmpty: true, type: 'string' } }
	];
	const validationResult = Validator.validate(categoryData);

	if (validationResult.status === true) {
		req.app.get('db').action.addRecord({ table: 'categories' }, DBHelpers.getInsertQueryData(categoryData), function(error) {
			if (error !== null) {
				return res.status(500).json(error);
			}

			return res.json({ id: this.lastID });
		});
	} else {
		return res.status(validationResult.statusCode).json(validationResult.message);
	}
};
