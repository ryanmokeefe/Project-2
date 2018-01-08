const User = require('../models/user-schema')
const Answer = require('../models/answer-schema')
const Question = require('../models/question-schema')
const Resource = require('../models/resource-schema')
const Router = express.Router()
var usersController = require('../controllers/users');

const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')

// function for authenticated user:
function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();
  
    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

// get main page
Router.get('/', (req, res) => {
    Resource.find({})
    .then((resource) => {
        // show all
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

// routes for user (from passport)
router.route('/signup')
.get(usersController.getSignup)
.post(usersController.postSignup)

router.route('/login')
.get(usersController.getLogin)
.post(usersController.postLogin)

router.route("/logout")
.get(usersController.getLogout)

// adds route for secret page IF user is authenticated:
router.route("/secret")
.get(authenticatedUser, usersController.secret)

// get one by name:
Router.get('/:name', (req, res) => {
    let name = req.params.name
    Resource.findOne({name: req.params.name})
    .then((resource) => {
        res.render('resources-show', {
            resource: resource
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

// Post new resources:
Router.post('/', (req, res) => {
    Resource.create(req.body.resource)
    .then((resource) => {
        res.redirect(`/resources/${resource.name}`)
    })
    .catch((err) => {
        console.log(err)
    })
})

// update resources: 
Router.put('/:name', (req, res) => {
    Resource.findOneAndUpdate({name: req.params.name}, req.body.resource, {new: true})
    .then(resource => {
    res.redirect(`/resources/${resource.name}`)
    })
    .catch((err) => {
        console.log(err)
    })
})

// delete resource ** (make so only authorized user can delete): 
Router.delete('/:name', (req, res) => {
    Resource.findOneAndRemove({name: req.params.name})
    .then(() => {
        res.redirect('/candidates')
    })
})



module.exports = Router
