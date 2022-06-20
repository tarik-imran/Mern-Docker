var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("called");
  res.json({ KEY: "Jaima is VERY VERY great" });
});

module.exports = router;
