//require('dotenv/config');
// require('dotenv').config({ path: './.env' });
const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
let port = process.env.PORT
if(port == null || port =="") {
    port = 3000
}

//Database Connection
//const uri = process.env.MONGODB_URL;
const uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-v7o5p.mongodb.net:27017,cluster0-shard-00-01-v7o5p.mongodb.net:27017,cluster0-shard-00-02-v7o5p.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))
    
});


//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//Modules
const home = require('./routes/home.js')
const departments = require('./routes/departments.js')
const adminIndex = require('./routes/admin/index.js')
const adminCreate = require('./routes/admin/create.js')
const adminCreatePost = require('./routes/admin/createPost.js')
const adminUpdate = require('./routes/admin/update.js')
const adminUpdatePost = require('./routes/admin/updatePost.js')
const adminDelete = require('./routes/admin/delete.js')
const flyers = require('./routes/flyers.js')
const login = require('./routes/admin/login.js')


//Routes
app.get('/', home)
app.get('/departments', departments)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.post('/admin/create', adminCreatePost)
app.get('/admin/update/:id', adminUpdate)
app.post('/admin/update/:id', adminUpdatePost)
app.get('/admin/delete/:id', adminDelete)
app.get('/flyers', flyers)
app.get('/login', login)

//Server Activation
// app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))