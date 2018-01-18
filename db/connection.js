const mongoose = require('mongoose')
const seedData = require('./seeds.json')


if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/project-2");
  }

  
  mongoose.Promise = Promise
  module.exports = mongoose

  // Remove commented code in production!
  
  // mongoose.connect('mongodb://localhost/project-2')
  // .then(() => {
  //     console.log(`Connection Established to DB`)
  // })
  //     .catch((err) => {
  //         console.log('Connection Failed!', error)
  // })
