const mongoose = require('mongoose');


const authorSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    imgUrl:{
        type:String,
        
    },
    

},);

mongoose.model("Author", authorSchema);