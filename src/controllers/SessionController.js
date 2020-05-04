//const Session = require('../models/Session');
const User = require('../models/User');

module.exports = {
  async store(request, response)  {
    const {email} = request.body;

    const user = await User.findOne({ email });

    const { id, dependents, name,  image_url, programs, birth} = user;

    return response.json({
      user: {
        id,
        name,
        email,
        image_url,
        birth,
        dependents,
        programs
      }
    });
  }
};
