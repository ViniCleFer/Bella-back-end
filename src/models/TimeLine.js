const mongoose = require('mongoose');

const TimeLineSchema = new mongoose.Schema({
  date: String,
  action: [String],
  hour: [String],
  info: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('TimeLine', TimeLineSchema);
