const Subscribe = require('../models/Subscribe');
const Program = require('../models/Program');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const subscribes = await Subscribe.find({user: user_id});
  
    return response.json({
      subscribes
    });
  
   
  },

  async store(request, response)  {
    const {program_id} = request.params
    const {user_id} = request.params;

    const programs = await Program.findById(program_id);

    console.log(program_id);

    const { professionals, name,  image, public, description} = programs;

    const subscribe = await Subscribe.create({
      user: user_id,
      program_id,
      professionals,
      name,
      image,
      public,
      description
    });

    console.log(subscribe);

    const { _id} = subscribe;
    
    return response.json({
      subscribe: {
        id: _id,
        user: user_id,
        program: {
          id: program_id,
          professionals,
          name,
          image,
          public,
          description
        }
      }
    });
  }
};

/*
async index(request, response) {
    const {user_id} = request.params;

    const programs = await Subscribe.find({
      user: user_id
    })

    const { id, professionals, name,  image, public, description} = programs;


    console.log(programs);
    
    return response.json([{
      subscribe: id,
      user: user_id,
      programs: {
        professionals,
        name,
        image,
        public,
        description
      }
    }]);
  },
*/