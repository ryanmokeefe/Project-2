
const router = require('express').Router()
const Resource = require('../models/resource-schema')




// find all videos: 

router.get('/videos', (req, res) => {
    Resource.find({ videos: "Yes"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })
  
// find all exercises: 

router.get('/exercises', (req, res) => {
    Resource.find({ exercises: "Yes"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

// find both exercises and videos:

router.get('/both', (req, res) => {
    Resource.find({ videos: "Yes", exercises: "Yes" })
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

////////////////////////

// articles: 

router.get('/articles', (req, res) => {
    Resource.find({ type: "Article"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

// lectures: 

// You could dry this up by finding by the type and then making the route :resourceType!
router.get('/lectures', (req, res) => {
    Resource.find({ type: "Lecture"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

// podcasts: 
router.get('/podcasts', (req, res) => {
    Resource.find({ type: "Podcast"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

// lessons: 
router.get('/lessons', (req, res) => {
    Resource.find({ type: "Lesson"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

// documentation: 
router.get('/documentation', (req, res) => {
    Resource.find({ type: "Documentation"})
    .then((resource) => {
        res.render('resources-index', {
            resources: resource
        })
    })
    .catch((err) => {console.log(err)
    })
  })

  module.exports = router
