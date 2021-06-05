const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    cpf: String,
    email: String,
    password: String
  }
);

module.exports = mongoose.model("User", UserSchema);