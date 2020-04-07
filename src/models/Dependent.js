const mongoose = require('mongoose');

const DependentSchema = new mongoose.Schema({
  name: String,
  image: String,
  birth: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Dependent', DependentSchema);
