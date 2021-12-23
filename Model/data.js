const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
	
		data : Object 
})

module.exports = mongoose.model('data' , dataSchema)