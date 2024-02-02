const jwt = require("jsonwebtoken");
const Token = require("../models/token-model.js");

class tokenService {
  generateTokens(payload) {
    if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
      throw new Error("Отсутствует секретный ключ для создания токена.");
    }
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
    const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30d"})
    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(id, refreshToken) {
    const tokenData = await Token.findOne({ userId: id });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId: id, refreshToken});
    return token;
  }
}

module.exports = new tokenService();