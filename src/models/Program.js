const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  professionals: [String],
  public: String
});

module.exports = mongoose.model('Program', ProgramSchema);
