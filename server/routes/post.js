const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");
const Author = mongoose.model("Author");
const Comment = mongoose.model("Comment");

router.get('/post',(req,res)=>{
    console.log('getting posts')
    Post.find()
    .populate('category','_id name')
    .populate('author', '_id name' )
    .then((posts) => {
        
        res.json({posts});
    }
    
    )
    .catch(err=>{console.log(err)
    })
});

router.get('/featured-posts',(req,res)=>{
    Post.find({isFeatured:true})
    .populate('category','_id name')
    .populate('author', '_id name' )
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.get("/posts/:id",(req,res)=>{
    Post.find({_id : req.params.id})
    .populate('category','_id name')
    .populate('author', '_id name' )
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.get("/posts/category/:catId" ,(req,res)=>{
    Post.find({category : {_id: req.params.catId }})
    .populate('category','_id name')
    .populate('author', '_id name' )
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.get('/trending-post',(req,res)=>{
    Post.find().sort({numberLikes:-1}).limit(5)
    .populate('category','_id name')
    .populate('author',"_id name" )
    
    .then((posts) => {
        
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })

});

router.get('/fresh-stories',(req,res)=>{
    Post.find().sort({_id:-1}).limit(3)
    .populate('category','_id name')
    .populate('author','_id name')
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});

router.post('/new-post',(req,res)=>{
   const {title,isFeatured, description, imgUrl, category,numberLikes,author} = req.body;
   if ( !title || !description || !imgUrl || !category ){
       res.json(  {err:'All Fields are required'})
   }
   Category.findOne({_id : category.id})
    
    .then((category) => {
        Author.findOne({_id: author.id})
        .then((author)=>{
            const post = new Post({
                title,isFeatured, description, imgUrl, category, numberLikes,author
               })
            
               post.save()
               .then(()=>{
                res.json(  {msg:'Post Saved'})
               })
        })
        
           .catch((err)=>{
               console.log(err)
           })
    })
    .catch(err=>{console.log(err)
    })
});

router.get('/search/:str',(req,res)=>{
    const {str} = req.params;
    if(!str){
        res.json({err:'Nothing to search'})
    }
    Post.find({$text: {$search:str}})
     
     .then((post) => {
        res.json({msg:"Found!",post})
     })
     .catch(err=>{console.log(err)
     })
 });
 

 router.get('/post-number',(req,res)=>{
    Post.count({})
    .then((postNumber) => {
        res.json({postNumber});
    })
    .catch(err=>{console.log(err)
    })
});

module.exports = router