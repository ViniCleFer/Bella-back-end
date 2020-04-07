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
  const {problems, risk, date, questions, conclusion, attendance, duration } = request.body;
  const {user_id} = request.headers;
  const {medical_id} = request.headers;

  const medRecord = await MedicalRecord.create({
    user: user_id,
    medical: medical_id,
    questions,
    conclusion,
    problems,
    date,
    risk,
    attendance,
    duration
  });
  
    return response.json(medRecord);
  }
};
