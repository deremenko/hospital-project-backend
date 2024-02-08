const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./scr/router/index.js");
const error = require("./scr/middlewares/error-middleware.js");
const { PORT, DB_URL, CORS_OPTIONS } = require("./config.js");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(CORS_OPTIONS));
app.use('/', router);
app.use(error);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
}

start();