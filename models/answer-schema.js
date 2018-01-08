// const mongoose = require('../db/connection')
const mongoose = require('../db/connection');

const UserSchema = require('./user-schema')

// const User = mongoose.model('User')


const AnswerSchema = new mongoose.Schema({
    answer: String,
    creator: [{
        type: mongoose.Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'User'
      }],
    date: {type: Date, default: Date.now},
    votes: Number
})

// const Answer = mongoose.model('Answer', AnswerSchema)
// module.exports = Answer

mongoose.model('Answer', AnswerSchema)

module.exports = mongoose
