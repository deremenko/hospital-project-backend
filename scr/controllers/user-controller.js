const UserService = require("../services/user-services.js");
const cookieSettings = {
  maxAge: 30 * 24 * 60 * 60, 
  httpOnly: true
}

class UserController {

  async registration(req, res, next) {
    try {
      const { login, password } = req.body;
      
      const userData = await UserService.registrationUser(login, password);
      
      res.cookie('refreshToken', userData.refreshToken, cookieSettings);
      res.status(200).json(userData);
    } catch (err) {
      next(err);
    }
  }

  async loginUser(req, res, next) {
    try {
      const { login, password } = req.body;
      
      const userData = await UserService.authorization(login, password);

      res.cookie('refreshToken', userData.refreshToken, cookieSettings);
      res.status(200).json(userData);
    } catch (err) {
      next(err);
    }
  }

  async logoutUser(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await UserService.deauthorization(refreshToken);

      res.clearCookie('refreshToken');
      res.status(200).json(token);
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = new UserController();