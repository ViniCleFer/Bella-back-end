const User = require('../models/User');

module.exports = {
  async store(request, response)  {
    const {filename} = request.file;
    const {name, birth, email, dependents, programs } = request.body;

    const user = await User.create({
      image: filename,
      email,
      birth,
      dependents: dependents.split(',').map(dependent => dependent.trim()),
      name,
      programs: programs.split(',').map(programs => programs.trim()),
    })
  
    return response.json(user);
  }
};