// const mongoose = require('../db/connection')
const mongoose = require('mongoose');

const UserSchema = require('./user-schema') .model('User')
const AnswerSchema = require('./answer-schema').model('Answer')

// const Answer = mongoose.model('Answer')
// const User = mongoose.model('User')

const QuestionSchema = new mongoose.Schema({
    title: String,
    question: String,
    creator: [UserSchema],
    date: {type: Date, default: Date.now},
    answers: [{
        type: mongoose.Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'Answer'
      }]
    // answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
})

// const Question = mongoose.model('Question', QuestionSchema)

// module.exports = Question

mongoose.model('Question', QuestionSchema)
module.exports = mongoose
