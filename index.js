const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port =process.env.port || 3000

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
const adminDelete = require('./routes/admin/delete.js')

//Routes
app.get('/', home)
app.get('/departments', departments)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.post('/admin/create', adminCreatePost)
app.get('/admin/update', adminUpdate)
app.get('/admin/delete/:id', adminDelete)

//Server Activation
app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))