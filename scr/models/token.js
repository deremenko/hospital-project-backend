const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  refreshToken: {
    type: String,
    required: true
  }
});

module.exports = Token = mongoose.model("Tokens", tokenSchema);