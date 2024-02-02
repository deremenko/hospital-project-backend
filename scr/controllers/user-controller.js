const userService = require("../services/user-services.js");

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body;
      const userData = await userService.registrationUser(login, password);
      
      //30 day = 30 * 24 * 60 * 60
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60, httpOnly: true});
      
      res.status(200).json(userData);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();