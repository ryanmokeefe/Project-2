// implementing local passport.js from class

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const QuestionSchema = require('./question-schema')
const AnswerSchema = require('./answer-schema')
const ResourceSchema = require('./resource-schema')

const UserSchema = new mongoose.Schema({
  local : {
    email        : String,
    password     : String,
    displayname: String,
    firstName: String,
    lastName: String, 
    profileImg: String,
    dateJoined: {type: Date, default: Date.now},
    // questionsPosted: [QuestionSchema],
    // answersPosted: [AnswerSchema],
    // notes: [NotesSchema],
    // resourcesPosted: [ResourceSchema],
    // resourcesSaved: [ResourceSchema]
  }
});

// (placing this in schema file is better seperation of concerns):
 UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//////

// compare passwords and if correct, and allow entry:
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
