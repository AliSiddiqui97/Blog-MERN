const express = require('express')
const app = express();
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 6000;

//connection to mongo

mongoose.connect(MONGOURI,{ useUnifiedTopology: true,useNewUrlParser: true } );

mongoose.connection.on('connected',()=>{
    console.log('Connected')
})
mongoose.connection.on('error',(error)=>{
    console.log("ERROR "+ error)
})




//Models
require('./models/post')
require('./models/category')
require('./models/comment')
//Routes
app.use(express.json());
app.use(require('./routes/post'));
app.use(require('./routes/category'));
app.use(require('./routes/comment'));

app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT )
} );