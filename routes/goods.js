var express = require('express');
var router = express.Router();
var database = require("../data/data.json")

router.get("/", function (req, res){
  res.json(database.goods)
})

module.exports = router;
