const Reception = require("../models/reception.js");

class ReceptionServices {
  async createReception(receptionData) {

    const newReception = new Reception({receptionData});

    await newReception.save();
    return newReception;
  }

  async deleteReception(id) {
    const deletedReception = await Reception.findOneAndDelete({ _id: id });
    return deletedReception;
  };

}

module.exports = new ReceptionServices();