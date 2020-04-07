const TimeLine = require('../models/TimeLine');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const timeLine = await TimeLine.find({
      user: user_id
    })

    return response.json(timeLine)
  },

  async store(request, response)  {
    const {action, hour, date, info } = request.body;
    const {user_id} = request.headers;

    const timeLine = await TimeLine.create({
      user: user_id,
      action,
      info,
      date,
      hour,
    });
  
    return response.json(timeLine);
  }
};
