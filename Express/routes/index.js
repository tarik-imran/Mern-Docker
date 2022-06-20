var express = require("express");
var { default: mongoose } = require("mongoose");
const mongooseSchema = require("../mongoose/schema");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // const User = mongoose.model("info", mongooseSchema.userSchema);
  // User.create({ name: "hello" });
  // const h = User.find({ name: "hello" });
  res.json("hello");
});

module.exports = router;
