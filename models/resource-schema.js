// const mongoose = require('../db/connection')
// do I need to require all other schemas being used?
const mongoose = require('../db/connection');

const AnswerSchema = require('./answer-schema').model('Question')
const QuestionSchema = require('./question-schema').model('Question')
// const QuestionSchema = mongoose.model('Question')


const ResourceSchema = new mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    url: String,
    videos: String,
    exercises: String,
    votes: Number,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'Question'
      }],
})

// const Resource = mongoose.model('Resource', ResourceSchema)

// module.exports = Resource

mongoose.model('Resource', ResourceSchema)
module.exports = mongoose
