var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var home            = require('./routes/home');
var apiConfig       = require('./routes/api/config.json');

var app             = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongoose.connect('mongodb://localhost:27017/mean');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

for(var i = 0; i < apiConfig.length; i++) {
    console.log("Register API routes:", apiConfig[i].url);
    var api = require('./routes/api/' + apiConfig[i].id);
    app.use(apiConfig[i].url, api);
}

app.use('/', home);
console.log("Register PAGE routes:", '/*');

app.use(function(req, res) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('error', {
        message: err.message,
        error: err
    });
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: err
        });
    });
}

app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
console.log("App listening on http://localhost:" + (process.env.PORT || '3000'));
