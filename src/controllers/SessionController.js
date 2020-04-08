//const Session = require('../models/Session');
const User = require('../models/User');

module.exports = {
  async store(request, response)  {
    const {email} = request.body;

    const user = await User.find({where: { email }}).exec();

    const { dependents, name,  image, programs, birth} = await user;

    return response.json(console.log({user})
    );
  }
};
