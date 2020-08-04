const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Author = mongoose.model("Author");

router.get('/get-authors',(req,res)=>{
    
    Author.find()
    .then((posts) => {
        res.json({posts});
    })
    .catch(err=>{console.log(err)
    })
});




router.post('/new-author',(req,res)=>{
    const {name,password,email,imgUrl} = req.body;
 
    if ( !name ){
        res.json(  {err:'Name is required'})
    }
    if ( !password ){
        res.json(  {err:'Password is required'})
    }
    if ( !email ){
        res.json(  {err:'Email is required'})
    }
 
    const author = new Author({
     name,password,email,imgUrl
    })
 
    author.save()
    .then(()=>{
     res.json(  {msg:'Author added'})
    })
    .catch((err)=>{
        console.log(err)
    })
 });
module.exports = router