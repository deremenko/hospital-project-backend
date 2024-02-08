const Reception = require("../models/reception.js");

class ReceptionServices {
  async createReception(receptionData) {
    const newReception = new Reception(receptionData );

    await newReception.save();
    return newReception;
  }

}

module.exports = new ReceptionServices();