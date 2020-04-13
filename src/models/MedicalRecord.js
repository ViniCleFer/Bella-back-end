const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  medical: String,
  especiality: String,
  image: String,
  problems: [String],
  questions: [String],
  conclusion: String,
  risk: String,
  level: Number,
  date: Date,
  attendance: String,
  duration: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
    },{
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

MedicalRecordSchema.virtual('image_url').get(function() {
  return `${this.image}`
})

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
