const user = require('../Model/user')


exports.register = (req , res , next) => {
	let {username , password } = req.body

	if(!username  || !password){
		res.status(400).json({
			message : 'field register should not empty '
		})
	}

	Data = new user({
		username : username , 
		password : password
	})

	Data.save().then( result => {
		res.status(201).json({
			message : "Success" ,
			data : result 
		})
	})
}

exports.login = (req , res , next) => {
	var { username , password} = req.body 

	if(!username || !password){
		res.status(400).json({
			message : "field login should not empty"
		})
	}

	user.findOne( {username : username})
	.then(User => {

		if(!User){
			res.status(400).json({
				message : "User Not Found"
			})
		}

		res.status(400).json({
			message : "User Found" , 
			data : User
		})

	})
	.catch(err => {
		console.log(err)
	})
}