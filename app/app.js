var express = require('express');
var reload = require('reload');
var app = express();
var socketio = require('socket.io')();

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Cambridge Core';
//app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/newsletter'));
//app.use(require('./routes/speakers'));
//app.use(require('./routes/feedback'));
//app.use(require('./routes/api'));
//app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

socketio.attach(server);

//socketio.on('connection', function(socket) {    
//    socket.on('postMessage', function(data) {
//        socketio.emit('updateMessages', data);
//    })
//});

reload(server, app);