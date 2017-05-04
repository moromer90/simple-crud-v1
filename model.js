const mongoose = require('mongoose');
//Define our Mongoose Schema. Defined structure for all projects
var userSchema = new mongoose.Schema({
    name: {
    	type: String, 
    	required:[true, 'Name should contain lowercase letters'],
    	unique: false,
    	lowercase:true},
    email: {
    	type: String,
    	required: [true, "Email field can't be empty"],
    	trim:true,
    	unique: false,
    	message:""},
	pass: {
		type: String,
		required: true,
		trim: true
	},
    active: {
		type: Boolean, default:false
		},
	img:	{
		type: String
		}
});
module.exports = mongoose.model('User', userSchema);