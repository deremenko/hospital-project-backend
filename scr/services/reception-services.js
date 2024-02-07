const Reception = require("../models/reception.js");

class ReceptionServices {
  async createReception(receptionData) {

    const newReception = new Reception({
      patient: receptionData.patient,
      doctor: receptionData.doctor,
      date: receptionData.date,
      complaint: receptionData.complaint,
      userId: receptionData.userId,
    });

    await newReception.save();
    return newReception;
  }

}

module.exports = new ReceptionServices();