const ReceptionServices = require("../services/reception-services");

class ReceptionController {
   createReception = async (req, res, next) => {
    try {
      const { 
        patient, 
        doctor, 
        date, 
        complaint,   
      } = req.body;

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

  async deleteReception(req, res, next) {
    try {
      const id = req.params.id;

      const receptionData = await ReceptionServices.deleteReception(id);
      
      res.status(200).json(receptionData);
    } catch (err) {
      next(err);
    }
  }

  async editReception(req, res, next) {
    try {
      const { patient, doctor, date, complaint } = req.body;
      const { id } = req.params;

      const reception = await ReceptionServices.editReception(
        id, 
        { 
          patient, 
          doctor, 
          date, 
          complaint 
        });
      
      res.status(200).json(reception);
    } catch (error) {
      next(error);
    }
  }

  async getAllReceptions(req, res, next) {
    try {
      const id = req.user.id;

      const receptions = await ReceptionServices.getReceptions(id);
      
      res.status(200).json(receptions);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new ReceptionController();