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

router.get('/featured-posts',(req,res)=>{
    Post.find({isFeatured:true})
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.get("/posts/:id",(req,res)=>{
    Post.find({_id : req.params.id})
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.get("/posts/category/:catId" ,(req,res)=>{
    Post.find({category : {_id: req.params.catId }})
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
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

router.get('/fresh-stories',(req,res)=>{
    Post.find().sort({_id:-1}).limit(5)
    .populate('category','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.post('/new-post',(req,res)=>{
   const {title,isFeatured, description, imgUrl, category,numberLikes} = req.body;
   if ( !title || !description || !imgUrl || !category ){
       res.json(  {err:'All Fields are required'})
   }
   Category.findOne({_id : category})
    
    .then((category) => {
        const post = new Post({
            title,isFeatured, description, imgUrl, category, numberLikes
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



module.exports = router