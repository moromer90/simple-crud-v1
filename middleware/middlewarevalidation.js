var validator = require('validator');
	
	module.exports = function (req, res, next) {
    		if (validator.isEmail(req.body.email)) return next();
    		res.status(400).send({message: 'Email inválido'});
	};
