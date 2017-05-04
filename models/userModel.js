const mongoose = require('mongoose');
//Define our Mongoose Schema. Defined structure for all projects
var userSchema = new mongoose.Schema({
    name:  String,
    email: String,
	pass: String,
    active: Boolean,
	img: String
});
module.exports = mongoose.model('user', userSchema);