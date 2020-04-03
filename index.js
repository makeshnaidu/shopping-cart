const express = require('express')
const app = express()
const port =process.env.port || 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const home = require('./routes/home.js')
const departments = require('./routes/departments.js')
const adminIndex = require('./routes/admin/index.js')
const adminCreate = require('./routes/admin/create.js')
const adminUpdate = require('./routes/admin/update.js')
const adminDelete = require('./routes/admin/delete.js')

//Routes
app.get('/', home)
app.get('/departments', departments)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.get('/admin/update', adminUpdate)
app.get('/admin/delete', adminDelete)

//Server Activation
app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))