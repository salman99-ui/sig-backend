const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	
		username : {
			type : String ,
			required : [true , "must have username"]
		} ,

		password : {
			type : String ,
			required : [true , "Must have password"]
			
		} 
})

module.exports = mongoose.model('user' , userSchema)