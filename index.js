const express = require('express')
const app = express()
const port =process.env.port || 3000

//Middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const home = require('./routes/home.js')
const departments = require('./routes/departments.js')
const admin = require('./routes/admin.js')

app.get('/', home)
app.get('/departments', departments)
app.get('/admin', admin)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))