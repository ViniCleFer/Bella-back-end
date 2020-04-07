const Program = require('../models/Program');

module.exports = {
  async index(request, response) {
    const program = await Program.find();

    return response.json(program);
  },

  async show(request, response) {
    const {id} = request.params;

    const program = await Program.findOne({
      _id: id
    });

    return response.json(program);
  },

  async store(request, response)  {
    const {filename} = request.file;
    const {name, description, professionals, public } = request.body;

    const program = await Program.create({
      image: filename,
      description,
      public,
      professionals: professionals.split(',').map(dependent => dependent.trim()),
      name
    })
  
    return response.json(program);
  }
};