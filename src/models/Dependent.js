const mongoose = require('mongoose');

const DependentSchema = new mongoose.Schema({
  name: String,
  image: String,
  birth: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

DependentSchema.virtual('image_url').get(function() {
  return `http://localhost:3333/files/${this.image}`
})

module.exports = mongoose.model('Dependent', DependentSchema);
