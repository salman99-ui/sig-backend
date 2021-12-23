const express = require('express')
const controller = require('../Controller/data')
var Routes = express.Router()

Routes.get('/add' , controller.data)
Routes.get('/get' , controller.getData)
Routes.get('/:name' , controller.wilayah)

module.exports = Routes