const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  problems: [String],
  questions: [String],
  conclusion: String,
  risk: Number,
  date: String,
  attendance: String,
  duration: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  medical: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medical'
  },
  },{
    timestamps: true
  }
);

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
