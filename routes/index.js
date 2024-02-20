var express = require("express");
const passport = require("passport");
var router = express.Router();
const localStrategy = require("passport-local");
const userRouter = require('./users');
passport.use(new localStrategy(userRouter.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
});

router.get("/register",  function (req, res) {
  res.render("register")
});

router.get('/contact', function(req, res){
  res.render('contact')
});

router.get('/wheat', function(req, res){
  res.render('wheat')
});
router.get('/cashew', function(req, res){
  res.render('cashew')
});
router.get('/garlic', function(req, res){
  res.render('garlic')
});
router.get('/wheat', function(req, res){
  res.render('wheat')
});
router.get('/maize', function(req, res){
  res.render('maize')
});
router.get('/greengram', function(req, res){
  res.render('greengram')
});
router.get('/mushroom', function(req, res){
  res.render('mushroom')
});
router.get('/rubber', function(req, res){
  res.render('rubber')
});
router.get('/tumeric', function(req, res){
  res.render('tumeric')
});
router.get('/coriender', function(req, res){
  res.render('coriender')
});
router.get('/bittergroud', function(req, res){
  res.render('bittergroud')
});
router.get('/beans', function(req, res){
  res.render('beans')
});
router.get('/soyabeans', function(req, res){
  res.render('soyabeans')
});

router.get('/wheatd', function(req, res){
  res.render('wheatd')
});



router.post('/register', (req, res, next) => {
  const userdata = {
    username: req.body.username,
    password: req.body.password,

    // ... other user data
  };

  userRouter.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      });
    })
    .catch(next);
});


router.get("/weather", function (req, res, next) {
  res.render("weather");
});

router.get("/ph", function(req, res){
  res.render('ph')
})  

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res, next) {
    res.render("profile");
  }
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get('/login', function(req, res, next){
  res.render('login')
})
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}


module.exports = router;
