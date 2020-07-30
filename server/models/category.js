const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    
},{timestamps:true});

mongoose.model("Category", categorySchema);