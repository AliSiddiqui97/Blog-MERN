const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

router.get('/post',(req,res)=>{
    Post.find()
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.post('/new-post',(req,res)=>{
   const {title, description, imgUrl, category,numberLikes} = req.body;
   if ( !title || !description || !imgUrl || !category ){
       res.json(  {err:'All Fields are required'})
   }
   Category.findOne({_id : category.id})
    
    .then((category) => {
        const post = new Post({
            title, description, imgUrl, category, numberLikes
           })
        
           post.save()
           .then(()=>{
            res.json(  {msg:'Post Saved'})
           })
           .catch((err)=>{
               console.log(err)
           })
    })
    .catch(err=>{console.log(err)
    })
});


router.get('/trending-post',(req,res)=>{
    Post.find().sort({numberLikes:-1})
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});
module.exports = router