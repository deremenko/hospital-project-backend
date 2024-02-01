const { Schema } = require("mongoose");

const receptionsSchema = new Schema({
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
  }
});

module.exports = Receptions = mongoose.model("Receptions", receptionsSchema);