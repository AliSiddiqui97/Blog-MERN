const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    imgUrl:{
        type:String,
        required: true
    },
    category:{
        type: ObjectId,
        ref:'Category'
    },
});

mongoose.model("Post", postSchema);