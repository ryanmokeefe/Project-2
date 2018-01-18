const router = require('express').Router()
const User = require('../models/user-schema')

// all from passport lesson

var passport = require("passport")
router.route('/signup')
.get(getSignup)
.post(postSignup)

router.route('/login')
.get(getLogin)
.post(postLogin)

router.route("/logout")
.get(getLogout)

//////////// find all videos: 

// router.get('/search/video', (req, res) => {
//   Resource.find({ videos: "Yes"})
//   .then((resource) => {
//       res.render('resources-index', {
//           resources: resource
//       })
//   })
//   .catch((err) => {console.log(err)
//   })
// })


// Be consistent on semicolons!
// Great job implementing auth though!

// function for authenticated user:
function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/login');
}

// adds route for profile page IF user is authenticated:
router.route("/profile")
.get(authenticatedUser, profile)
// GET /signup
function getSignup(req, res, next) {
  res.render('signup.hbs', { message: req.flash('signupMessage') });
}

// POST /signup
function postSignup(req, res, next) {
  // local signup has to match the local signup in passport.use export: **********************
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(req, res, next);
}

// GET /login

function getLogin(req, res, next) {
  res.render('login.hbs', { message: req.flash('loginMessage') });
}

// POST /login (if verification was a success, allow entry):
function postLogin(req, res, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(req, res, next);
}

// GET /logout
function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

// Restricted page
function profile(req, res){
  res.render("profile.hbs");

}


// router.get('/', (req, res) => {
//   Resource.find({})
//   .then((resource) => {
//       // show all
//       res.render('resources-index', {
//           resources: resource
//       })
//   })
//   .catch((err) => {
//       console.log(err)
//   })
// })

// 
// router.get('/:name', (req, res) => {
//   let name = req.params.name
//   Resource.findOne({name: req.params.name})
//   .then((resource) => {
//       res.render('resources-show', {
//           resource: resource
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// 



// module.exports = {
//   getLogin: getLogin,
//   postLogin: postLogin,
//   getSignup: getSignup,
//   postSignup: postSignup,
//   getLogout: getLogout,
//   profile: profile
// }

module.exports = router
