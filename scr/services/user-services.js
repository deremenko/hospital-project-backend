const userModel =  require("../models/user-model.js")
const tokenService = require("./token-services.js");
const bcrypt = require("bcrypt");
const UserDto = require("../dtos/user-dto.js");

class userService {
  async registrationUser(login, password) {
    const candidate = await userModel.findOne({login});
    if (candidate) {
      throw new Error(`Пользователь с логином ${login} уже существует`)
    };

    const hashPassword = await bcrypt.hash(password, 3)
    const user = await userModel.create({login, password: hashPassword});
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
  
    return {
      ...tokens,
      user,
    }
  }
}

module.exports = new userService();