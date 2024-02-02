const userService = require("../services/user-services.js");

class userController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body;
      const userData = await userService.registrationUser(login, password);
      console.log(userData.refreshToken)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60});
      return res.json(userData);
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new userController();