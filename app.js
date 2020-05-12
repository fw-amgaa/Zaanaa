const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');

// DB CONNECTION

const db = require('./config/keys').MongoURI;
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
  .then( ()=> console.log("Successfully Connected To MongoDB") )
  .catch( err => console.log("MongoDB Error" + err) )

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const adminRouter = require('./routes/admin');

var app = express();

// Template Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/products', productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
