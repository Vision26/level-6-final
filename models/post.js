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
    age:{
        type: Number,
        default:0
    },
    color:{
        type:String
    },
    breed:{
        type:String
    },
    description:{
        type:String
    },
    imgUrl:{
        type:String,
        required: true
    },
    completed:{
        type: Boolean,
        default:false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    hearts:{
        type: Number,
        default:0
    },
    comments:[commentSchema]
})

const Comment = mongoose.model("Comment", commentSchema)
const Post = mongoose.model("Post", postSchema)
module.exports = (Comment, Post)
//continue: finish post Schema, retrace and revisit user login info: age, phone number, address