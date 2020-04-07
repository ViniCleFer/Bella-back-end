const Medical = require('../models/Medical');

module.exports = {
  async store(request, response)  {
    const {filename} = request.file;
    const {name, especiality } = request.body;

    const medical = await Medical.create({
      name,
      especiality,
      image: filename,
      
    })
  
    return response.json(medical);
  }
};