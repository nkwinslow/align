var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  pass: String,
  isAdmin: Boolean,
  profile: {
    firstName: String,
    lastName: String,
    title: String,
    headline: String
  }
});

module.exports = mongoose.model('User', User);
