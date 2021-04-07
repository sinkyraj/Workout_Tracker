require('dotenv').config()
const express = require('express')
const { join } = require('path')
//const ObjectId = require('mongojs').ObjectId
const PORT= process.env.PORT || 3000 

//const db = require('mongojs')('workout')  //workoutdb
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))



// require('./db')  //require('./db')
//   .then(() => app.listen(3000))
//   .catch(err => console.log(err))
const db=require('./db')
db.once('open',()=>{
app.listen(PORT)

})


