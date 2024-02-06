const jwt = require("jsonwebtoken");
const Token = require("../models/token.js");
const { ACCESS_SECRET, REFRESH_SECRET } = require("../../config.js");

class TokenService {
  
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, ACCESS_SECRET, {expiresIn: "30m"})
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, {expiresIn: "30d"})
    
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

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async decodedToken(token, secretKey) {
    const decryptedToken = jwt.verify(token, secretKey);
    return decryptedToken;
  }
  
}

module.exports = new TokenService();