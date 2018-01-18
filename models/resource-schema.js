const mongoose = require('../db/connection')
// do I need to require all other schemas being used?
//  No need to require others being used!!
const QuestionSchema = require('./question-schema')
// const NoteSchema = require('./question-schema')


const ResourceSchema = new mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    url: String,
    videos: String,
    exercises: String,
    votes: Number,
    questions: [],
    notes: []
    
})

const Resource = mongoose.model('Resource', ResourceSchema)

module.exports = Resource
