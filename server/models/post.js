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
    isFeatured:{
        type: Boolean,
        default: false
    },
    numberLikes:{
        type: Number,
        default: 0,
        required: true
    },
    category:{
        type: ObjectId,
        ref:'Category'
    },
    author:{
        type: ObjectId,
        ref:'Author'
    },
    comments:{
        type: Number,
        default:0
    }

},{timestamps:true});


postSchema.index({'$**': 'text'});
mongoose.model("Post", postSchema);