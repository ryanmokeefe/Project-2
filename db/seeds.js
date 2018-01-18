const mongoose = require('../controllers/resources')
const seedData = require('./seeds.json')
const Resource = require('../models/resource-schema')

Resource.remove({})
    .then(() => {
        return Resource.collection.insert(seedData)
    })
    .then(() => {
        // Call the method here!
        process.exit()
    })

