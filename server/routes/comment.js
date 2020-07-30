const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment")


router.get('/comments',(req,res)=>{
    Comment.find()
    .populate('post','_id title')
    .then((comments) => {
        res.json({comments});
    })
    .catch(err=>{console.log(err)
    })
});


router.post('/new-comment',(req,res)=>{
    const {body,post} = req.body;
    console.log(body,post)
    if ( !body   ){
        res.json(  {err:'No body'})
    }
    if( !post){
        res.json(  {err:'No post'})
    }
    
    Post.findOne({_id : post.id})
    .then((post_found) => {
        
         const comment = new Comment({
             body,post:post_found
            })
            comment.save()
            .then(()=>{
             res.json(  {msg:'Comment Saved'})
            })
            .catch((err)=>{
                console.log(err)
            })
     })
     .catch(err=>{console.log(err)
     })
 });

router.get("/comments/post/:postId" ,(req,res)=>{
    Comment.find({post : {_id: req.params.postId }})
    .populate('post','_id title')
    .then((commentsOnPost) => {
        res.json({commentsOnPost});
    })
    .catch(err=>{console.log(err)
    })
});

router.get('/comment-number',(req,res)=>{
    Comment.count({})
    .then((commentNumber) => {
        res.json({commentNumber});
    })
    .catch(err=>{console.log(err)
    })
});


module.exports = router