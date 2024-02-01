const { Schema } = require("mongoose");

const tokenSchema = new Schema({
  userId: {
    type: Schema.Type.ObjectId,
    ref: 'User'
  },
  refreshToken: {
    type: String,
    required: true
  }
});

module.exports = Token = mongoose.model("Tokens", tokenSchema);