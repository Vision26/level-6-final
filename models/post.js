const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment:{
        type: String,
        required: true
    },
    rndmUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const postSchema = new Schema({
    name:{
        type: String,
        required: true
    },

})
//continue: finish post Schema, retrace and revisit user login info: age, phone number, address