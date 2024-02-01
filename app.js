const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PORT, DB_URL } = require('./config.js');
const app = express();

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