const bcrypt = require("bcrypt");
const User =  require("../models/user.js")
const TokenService = require("./token-services.js");
const UserDto = require("../dtos/user-dto.js");
const ApiError = require("../exceptions/api-error.js");

class UserService {

  async registrationUser(login, password) {
    const candidate = await User.findOne({login});

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с логином ${login} уже существует`)
    };

    const hashPassword = await bcrypt.hash(password, 3)
    const user = await User.create({login, password: hashPassword});
    const userDto = new UserDto(user);
    
    const tokens = TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
  
    return {
      ...tokens,
      user,
    }
  }

  async authorization(login, password) {
    const user = await User.findOne({ login });
    if (!user) {
      throw ApiError.BadRequest('Пользоатель с таким логином не найден')
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw ApiError.BadRequest('Неверный пароль')
    }

    const userDto = new UserDto(user);
    const tokens = await TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user,
    }
  }

  async deauthorization(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }
  
}

module.exports = new UserService();