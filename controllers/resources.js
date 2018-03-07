const mongoose = require('mongoose')
const express = require('express')
const Resource = require('../models/resource-schema')
const Question = require('../models/question-schema')
const Answer = require('../models/answer-schema')
var searchController = require('../controllers/search')
var usersController = require('../controllers/users');
const router = express.Router()


// // function for authenticated user:
// function authenticatedUser(req, res, next) {
//     // If the user is authenticated, then we continue the execution
//     if (req.isAuthenticated()) return next();
  
//     // Otherwise the request is always redirected to the home page
//     res.redirect('/');
//   }

// get main page
router.get('/', (req, res) => {
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

////////////

  function thing() {
      console.log('stuff')
  }


////////////

  // get one by name:
  router.get('/:name', (req, res) => {
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
    
    // update resources: 
    router.put('/:name', (req, res) => {
        Resource.findOneAndUpdate({name: req.params.name}, req.body.resource, {new: true})
        .then(resource => {
            res.redirect(`/resources/${resource.name}`)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    // Post new resources:
    router.post('/', (req, res) => {
        Resource.create(req.body.resource)
        .then((resource) => {
            res.redirect(`/resources/${resource.name}`)
        })
        .catch((err) => {
            console.log(err)
        })
    })
 
      
  
    // delete resource ** (make so only authorized user can delete): 
    router.delete('/:name', (req, res) => {
        Resource.findOneAndRemove({name: req.params.name})
        .then(() => {
            res.redirect('/resources')
        })
    })
    
    
    module.exports = router
