const { Schema } = require("mongoose");

const receptionSchema = new Schema({
  patient: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Type.ObjectId,
    ref: 'User'
  }
});

module.exports = Reception = mongoose.model("Receptions", receptionSchema);