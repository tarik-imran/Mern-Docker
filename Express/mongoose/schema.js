const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});
