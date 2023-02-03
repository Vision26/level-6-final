const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')

//post the pet post
postRouter.post('/newpost', (req, res, next) => {
    req.body.user = req.auth._id
    const newPost = new Post(req.body)
    newPost.save((err, savePost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savePost)
    })
})
//update- updates hearts number
postRouter.put('/hearts/:userId', (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.userId, user: req.auth._id},
        {$inc:{hearts:1}},
        {new:true},
        (err, update) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(update)
        }
    )
})
//get all posts by the logged in user
postRouter.get('/postsbyuser/:userId', (req, res, next) => {
    Post.find(
        {user: req.auth._id},
        (err, getPosts) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(getPosts)
        }
    )
})
//all posts by all users
postRouter.get('/allposts', (req, res, next) => {
    Post.find((err, getAll) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getAll)
    } )
})
//delete post 
postRouter.delete('/delete/:postId', (req, res, next) => {
    Post.findOneAndDelete(
        {_id: req.params.postId, user: req.auth._id},
        (err, deletePost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`${deletePost.name} deleted.`)
        }
    )
})
//update post 
postRouter.put('/update/:postId', (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId},
        req.body,
        {new:true},
        (err, updatePost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatePost)
        }
    )
})

module.exports = postRouter