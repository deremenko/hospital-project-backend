const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./scr/router/index.js");
const mongoose = require("mongoose");
const { PORT, DB_URL } = require("./config.js");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.error
    process.exit(1)
  }
}

start();