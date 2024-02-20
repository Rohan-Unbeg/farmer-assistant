// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const expressSession = require('express-session')
// // const flash = require("connect-flash")
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const passport = require('passport');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



// // app.use(expressSession({
// //   resave: false,
// //   saveUninitialized: false,
// //   secret: "hello bye bye"
// // }))
// app.use(expressSession({
//   resave: false,
//   saveUninitialized: false,
//   secret: "hello bye bye"
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// // passport.serializeUser(usersRouter.serializeUser())
// // passport.deserializeUser(usersRouter.deserializeUser())

// passport.serializeUser( (user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser( (user, done) =>  {
//   done(null, {
//     provider: user.provider,
//     id: user.provider_id
//   });
// });


// // app.use(flash())

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// usersRouter.register(userdata, req.body.password)
// .then(function(registereduser){
//   passport.authenticate("local")(req, res, function(){
//     res.redirect('/profile');
//   })
// })

// module.exports = app;


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "hello bye bye"
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, {
    provider: user.provider,
    id: user.provider_id
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Move the registration logic inside a route or middleware

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
