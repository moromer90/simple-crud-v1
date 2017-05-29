var validator = require('validator');
	
	module.exports = function (req, res, next) {
    		if (validator.isEmail(req.body[0].email)) return next();
    		res.status(400).send({message: 'middleware email inválido'});
	};

//if ( (validator.isEmail(req.body[0].email)) && (!validator.isEmpty(req.body[0].name)) ) return next();