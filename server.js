const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
//dotenv setup for special token
process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))
//mongoose connect sets the library for schemas to be directed to the routers/compass
mongoose.connect(
    'mongodb://localhost:27017/final',
    () => console.log('Connected to the Database')
)
//direccts routes to be used in postman
app.use('/auth', require('./routes/authRouter.js'))
app.use('/final', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user
app.use('/final', require('./routes/postRouter.js'))
app.use('/final/comment', require('./routes/commentRouter.js'))
//console logs the errors
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
//this syntax lets you know when server is running in the terminal
app.listen(9000, () => {
    console.log('Local port 9000 - Server is running')
})