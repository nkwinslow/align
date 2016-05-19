var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var port = 9001;

var app = express();

var userCtrl = require('./api/controllers/userCtrl');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(session({
    secret: 'awwyissmotherfatherbreadcrumbs',
    saveUninitialized: false,
    resave: false
}));

app.use(express.static(__dirname + '/public'));

// app.post('/api/newUser', userCtrl.newUser);
// app.post('/api/login', userCtrl.login);
//
//
// var mongoUri = 'mongodb://localhost:27017/align';
// mongoose.connect(mongoUri);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log('connected to db at ' + mongoUri)
// });

app.listen(port);
