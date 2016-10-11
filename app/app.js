// node modules ====================================================================
var express = require('express');
var reload = require('reload');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var socketio = require('socket.io')();

var config = require('./config.js'); // config file

// database configuration ===========================================================
mongoose.connect(config.db); // initialize database connection

// application configurations =======================================================
app.set('port', process.env.PORT || 3000 ); // set port - environment variable [SET PORT=1234]
app.set('view engine', 'ejs'); // ejs as view engine
app.set('views', 'app/views'); // views dir

app.use(morgan('dev')); // logger
app.use(cookieParser()); // cookie reader
app.use(bodyParser()); // read html forms
app.use(session({ secret: 'averyuniquesecretword'})); // session secret
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // provides session
app.use(flash()); // flash messages stored in session
app.use(express.static('app/public')); // set public folder - accessed by clients
app.use(require('./routes/index')); // index routes
app.use(require('./routes/newsletter')); // newsletter routes
require('./helpers/passport')(passport);
//require('./routes/index.js')(app, passport); // i don't know what this is

// application local variables ======================================================
app.locals.siteTitle = 'Cambridge Core'; // default page title

// server configuration =============================================================
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

socketio.attach(server); // attach server to socket.io

//socketio.on('connection', function(socket) {    
//    socket.on('postMessage', function(data) {
//        socketio.emit('updateMessages', data);
//    })
//});

reload(server, app); // automated development - reload when changes happen
