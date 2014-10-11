var express       = require('express');
var app           = express();
var server        = require('http').createServer(app);
var path          = require('path');
var session       = require('express-session')({
                        secret: process.env.SESSION_SECRET || 'secret',
                        resave: false,
                        saveUninitialized: false
                    });
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser')();
var passport      = require('passport');
var flash         = require('connect-flash')();
var mongoose      = require('mongoose');
var configDB      = require('../config/site.json').database.url;

//configure app
require('multi-views').setupMultiViews(app);
app.set('view engine', 'ejs');
app.set('views', ['../views/admin', '../views']);

mongoose.connect(configDB);
require('../config/passport.js')(passport);

//use middleware
app.use(express.static(path.join('../components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser);
app.use(session);
app.use(flash);

app.use(passport.initialize());
app.use(passport.session());

//setup helper functions for ejs
require('../server/helpers.js')(app);

//define api web service
require('../server/shelby.js')(app, passport);

//define routes
require('../server/customroutes.js')(app, passport);
require('../server/routes.js')(app, passport);

//start server
server.listen(process.env.PORT, function () {
   console.log('The magic happens on port ' + process.env.PORT);
});