var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express() 

const authRoutes = require('./Routes/auth')
const dataRoutes = require('./Routes/data')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false }))
app.use(cors())

app.use('/auth' , authRoutes)
app.use('/data' , dataRoutes)

mongoose.connect('mongodb://localhost:9000/sig' ,  {useUnifiedTopology : true , useNewUrlParser : true })
.then( () => {
	console.log('server has running')
	app.listen('4000')
})
.catch(err => {
	console.log(err)
})