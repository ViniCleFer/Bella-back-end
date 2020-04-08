const MedicalRecord = require('../models/MedicalRecord');

module.exports = {
  async index(request, response) {
    const {user_id} = request.params;

    const medRecord = await MedicalRecord.find({
      user: user_id
    })

    return response.json(medRecord)
  },

  async store(request, response)  {
  const {filename} = request.file;
  const {medical, especiality, problems, risk, level, date, questions, conclusion, attendance, duration } = request.body;
  const {user_id} = request.headers;

  const medRecord = await MedicalRecord.create({
    user: user_id,
    medical,
    especiality,
    image: filename,
    questions: questions.split(','),
    conclusion,
    problems: problems.split(','),
    date,
    risk,
    level,
    attendance,
    duration
  });
  
    return response.json(medRecord);
  }
};
