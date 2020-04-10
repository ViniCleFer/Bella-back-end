const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  professionals: [String],
  public: String
},{
    toJSON: {
      virtuals: true
    }
  }
);

ProgramSchema.virtual('image_url').get(function() {
return `http://localhost:3333/files/${this.image}`
});

module.exports = mongoose.model('Program', ProgramSchema);
