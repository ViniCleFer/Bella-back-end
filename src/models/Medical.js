const mongoose = require('mongoose');

const MedicalSchema = new mongoose.Schema({
  name: String,
  especiality: String,
  image: String,
});

module.exports = mongoose.model('Medical', MedicalSchema);
