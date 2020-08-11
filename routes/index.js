var express = require("express");
var router = express.Router();
const person = require("../person.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", person);
});

module.exports = router;
