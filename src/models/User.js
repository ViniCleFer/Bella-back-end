const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  birth: Date,
  dependents: [String],
  programs: [String],
},{
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.virtual('image_url').get(function() {
  return `${this.image}`
});

module.exports = mongoose.model('User', UserSchema);
