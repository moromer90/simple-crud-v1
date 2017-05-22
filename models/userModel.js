const mongoose = require('mongoose');
//Define our Mongoose Schema. Defined structure for all projects
var userSchema = new mongoose.Schema({
    name:  String,
    // email: {type: String,  required: [true, 'Email line can\'t be empty'], index: { unique: true }, lowercase: true },
	email: {type: String, trim: true, index: true, unique: true},
	pass: String,
    active: {type: String, default: 'false'}
});
module.exports = mongoose.model('user', userSchema);