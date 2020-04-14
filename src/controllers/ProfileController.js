const Subscribe = require('../models/Subscribe');
const Program = require('../models/Program');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const subs = await Subscribe.find({user: user_id})

    return response.json(subs);
  },
  
  async store(request, response)  {
    const {program_id} = request.params
    const {user_id} = request.params;

    const novo = await Program.findById(program_id)

    const {name} = novo;

    const subscribe = await Subscribe.create({
      user: user_id,
      program: program_id,
      name: name
    });

    return response.json(subscribe);
  }
}