const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  birth: Date,
  dependents: [String],
  programs: [String]
});

module.exports = mongoose.model('User', UserSchema);
