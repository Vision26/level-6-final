const express = require('express')
const commentRouter = express.Router()
const Post = require('../models/post.js')
const mongoose = require('mongoose')

//posts comment by post id
commentRouter.post('/:postId', (req, res, next) => {
    const { newComment } = req.body
    console.log(req)
    Post.findOneAndUpdate(
        {_id: req.params.postId, user: req.auth._id},
        {$addToSet: {comments: {comment: newComment, rndmUser: mongoose.Types.ObjectId(req.auth._id)}}},
        {new: true}
    ).populate("comments").exec((err, populatePost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(populatePost)
    })
})
//gets comments by post id
commentRouter.get('/getcomment/:postId', (req, res, next) => {
    Post.find(
        {_id: req.params.postId},
        (err, getComments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(getComments)
        }
    )
})
//get all post with comments by user id and with same token
commentRouter.get('/user/:userId', (req, res, next) => {
    Post.find(
        {user: req.auth._id},
        (err, getUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(getUser)
        }
    )
})
//delete comment from a post using rndmUserId
// commentRouter.delete('/delete/:rndmId', (req, res, next) => {
//     Post.findOneAndDelete(
//         {_id: req.params.rndmId, user: req.auth._id, rndmUser: req.comments.comment.rndmUser},
//         (err, del) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(`Deleted ${del}`)
//         }
//     )
// })

module.exports = commentRouter