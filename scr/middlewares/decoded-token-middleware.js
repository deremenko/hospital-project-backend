const jwt = require("jsonwebtoken");
const { REFRESH_SECRET } = require("../../config.js");
const ApiError = require("../exceptions/api-error.js");

const decodedToken = (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }

  const user = jwt.verify(refreshToken, REFRESH_SECRET);
  req.customData = { userId: user._id };

  next();
}

module.exports = {
  decodedToken,
};