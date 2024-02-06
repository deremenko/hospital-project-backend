const Reception = require("../models/reception.js");
const TokenService = require("./token-services.js");
const { REFRESH_SECRET } = require("../../config.js");
const ApiError = require("../exceptions/api-error.js");

class ReceptionServices {

  async createReception(token, receptionData) {
    const user = await TokenService.decodedToken(token, REFRESH_SECRET);
    console.log(user);
    if (!user) {
      throw ApiError.UnauthorizedError();
    }

    const newReception = new Reception({
      patient: receptionData.patient,
      doctor: receptionData.doctor,
      date: receptionData.date,
      complaint: receptionData.complaint,
      userId: user._id,
    });

    await newReception.save();
    return newReception;
  }

}

module.exports = new ReceptionServices();