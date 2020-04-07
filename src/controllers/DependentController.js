const Dependent = require('../models/Dependent');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const dependents = await Dependent.find({
      user: user_id
    })

    return response.json(dependents)
  },

  async show(request, response) {
    const {id} = request.params;

    const dependents = await Dependent.findOne({
      _id: id
    });

    return response.json(dependents);
  },

  async store(request, response)  {
  const {filename} = request.file;
  const {name, birth } = request.body;
  const {user_id} = request.headers;

  const dependent = await Dependent.create({
    user: user_id,
    image: filename,
    birth,
    name
  });
  
    return response.json(dependent);
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