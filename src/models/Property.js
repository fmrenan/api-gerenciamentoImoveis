const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    cep: String,
    number: Number,
    complement: String,
    rentValue: Number,
    rooms: Number,
    available: {
      type: Boolean,
      default: true
  }
  }
);

module.exports = mongoose.model("Property", PropertySchema);