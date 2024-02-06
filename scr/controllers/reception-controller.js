const ReceptionServices = require("../services/reception-services");

class ReceptionController {

   createReception = async (req, res, next) => {
    try {
      console.log(req.body);
      const { refreshToken } = req.cookies;
      console.log(req.cookies);

      const newReception = await ReceptionServices.createReception(refreshToken, req.body);
      console.log(newReception);
      return res.status(201).json(newReception);
    } catch (err) {
      next(err);
    }
  };

}

module.exports = new ReceptionController();