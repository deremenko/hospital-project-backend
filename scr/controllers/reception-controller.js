const ReceptionServices = require("../services/reception-services");

class ReceptionController {
   createReception = async (req, res, next) => {
    try {
      const receptionData = {
        patient: req.body.patient,
        doctor: req.body.doctor,
        date: req.body.date,
        complaint: req.body.complaint,
        userId: req.body.user.id,
      } 

      const newReception = await ReceptionServices.createReception(receptionData);

      res.status(201).json(newReception);
    } catch (err) {
      next(err);
    }
  };

}

module.exports = new ReceptionController();