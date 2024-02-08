require('dotenv').config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const CORS_OPTIONS = {
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true, 
  optionSuccessStatus: 200, 
};

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET


module.exports = { PORT, DB_URL, CORS_OPTIONS, ACCESS_SECRET, REFRESH_SECRET };