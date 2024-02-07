const ReceptionServices = require("../services/reception-services");

class ReceptionController {
   createReception = async (req, res, next) => {
    try {
      const { 
        patient, 
        doctor, 
        date, 
        complaint,   
      } = res.body;

      const userId = req.user.id;

      const newReception = await ReceptionServices.createReception({
        patient, 
        doctor, 
        date, 
        complaint, 
        userId 
      });

      res.status(201).json(newReception);
    } catch (err) {
      next(err);
    }
  };

}

module.exports = new ReceptionController();