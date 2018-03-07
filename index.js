const express    = require('express')
const parser     = require('body-parser')
const methodOverride = require('method-override')
const hbs        = require('express-handlebars')
const controller = require('./controllers/resources.js')
const app        = express()
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
const userController = require('./controllers/users.js')
const searchController = require('./controllers/search.js')
const cors = require('cors')

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(cors());

// app.use(parser()); 

app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json({extended: false}))

app.set('port', process.env.PORT || 4000)
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: './views/',
    layoutsDir: './views/',
    defaultLayout: 'layout-main'
}))

// uses session ENCRYPTION
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./configs/passport')(passport);

// use passport for current user
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

app.get('/', (req, res) => {
    res.redirect('/resources')
})

app.use('/resources', controller)
app.use('/search', searchController)
app.use('/', userController)

// const io = require('socket.io').listen(server);
// io.sockets.on('connection', routes.vote);

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })

