const Subscribe = require('../models/Subscribe');
const Program = require('../models/Program');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const programs = await Subscribe.find({
      user: user_id
    })

    return response.json(programs)
  },

  async store(request, response)  {
    const {program_id} = request.params
    const {user_id} = request.params;

    const programs = await Program.findById(program_id);

    const { professionals, name,  image, public, description} = programs;
    
    return response.json({
      user: user_id,
      program: {
        professionals,
        name,
        image,
        public,
        description
      }
    });
  }
};