const express = require('express')
const connectDB = require('./config/db')
const handbar = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


const posts = require('./routes/posts')

//start app
const app = express()
// 
app.engine('handlebars', handbar())
app.set('view engine','handlebars')
//khoi dong bdp
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//override 
app.use(methodOverride('_method'))
// khoi dong express mid
app.use(express.json())

//csdl
connectDB()
//route basic file different
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

// sudung route
app.use('/posts',posts)
const PORT = 1212;
app.listen(PORT, () => console.log(`Ket noi Server Port ${PORT}`))
