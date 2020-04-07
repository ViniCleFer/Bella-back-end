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
    const {user_id} = request.headers;
  
    const subscribe = await Subscribe.create({
      user: user_id,
      program: program_id,
    });
    
      return response.json(subscribe);
    }
  
};

/*
async index(request, response) {
    const {user_id} = request.params;
    const {id} = request.query;

    if(!user_id === id) {
      return response.json({ok: "Deu ruim"})
    }
    
    const dependent = await Dependent.find({user: user_id})
    
    return response.json(dependent);
  },

  async show(request, response) {
    const {dependent_id} = request.params;
    const {user_id} = request.query;
    
    const dependent = await Dependent.find({dependent: user_id})
    
    return response.json(dependent);
  },
*/