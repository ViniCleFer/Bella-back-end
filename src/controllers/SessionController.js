const Session = require('../models/Session');

module.exports = {
  async store(request, response)  {
    const {email} = request.body;

    const user = await Session.create({
      email
    });

    return response.json(user);
  }
};