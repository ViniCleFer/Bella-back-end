const Subscribe = require('../models/Subscribe');

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
  
    const subscribe = await Subscribe.create({
      user: user_id,
      program: program_id,
    });
    
      return response.json(subscribe);
    }
};