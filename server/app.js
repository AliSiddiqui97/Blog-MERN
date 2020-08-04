const express = require('express')
const app = express();
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const cors = require('cors')
const PORT = 5000;

//connection to mongo

mongoose.connect(MONGOURI,{ useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true } );

mongoose.connection.on('connected',()=>{
    console.log('Connected')
})
mongoose.connection.on('error',(error)=>{
    console.log("ERROR "+ error)
})


app.use(cors())

//Models
require('./models/post')
require('./models/category')
require('./models/comment')
require('./models/author')
//Routes
app.use(express.json());
app.use(require('./routes/post'));
app.use(require('./routes/category'));
app.use(require('./routes/comment'));
app.use(require('./routes/author'));

app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT )
} );