const express = require('express');
const route = require('./post');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.render('index', { title: 'Register' });
});

//POST register Page
route.post('/register', (req, res, next) => {
  res.render('index', {title: 'POST Register'})
})

//GET login Page
route.get('/login', (req, res, next) => {
  res.render('index', {title: 'Welcome to Login Page'})
})

//POST login page
route.post('/login', (req, res, next) => {
  res.render('index', {title: "POST Login Page"})
})

//GET Profile
route.get('/profile', (req, res, next) =>{
  res.render('index', {title: "Profile Page"})
})

//PUT Update Profile
route.put('/profile/:userId', (req,res,next) => {
  res.render('index', {title: "Profile Update"})
})

//GET Forgot Password
route.get('/forgot', (req, res, next) => {
  res.render('index', {title: "Forgot Password Page"})
})

//POST Forget Password
route.post('/forgot', (req, res, next) => {
  res.render('index', {title: 'POST forgot password'})
  })

  //GET Reset Password - Takes Token
route.get('/reset/:token', (req,res, next) => {
  res.render('index', {title: 'GET Reset Password'})
})

//PUt

module.exports = router;