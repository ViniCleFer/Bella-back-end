const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  name: String,
  program: {
    type: mongoose.Schema.Types.String,
    ref: 'Program'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

});

module.exports = mongoose.model('Subscribe', SubscribeSchema);
