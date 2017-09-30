var express = require('express');
var router = express.Router();
var database = require("../data/data.json")

router.get("/", function (req, res){
  res.json(database.goods)
})

router.get("/categories/:categories" , function (req, res){
  var categories = req.params.categories;
  var data = database.goods;
  var response = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].categories == categories) {
      response.push(data[i])
    }
  }
  res.send(response)
})

router.get("/id/:id" , function (req, res){
  var id = req.params.id;
  var data = database.goods;
  var response = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      response.push(data[i])
    }
  }
  res.send(response)
})

router.get("/name/:name" , function (req, res){
  var name = req.params.name;
  var data = database.goods;
  var response = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      response.push(data[i])
    }
  }
  res.send(response)
})
// 
// router.post('/:id', function(req, res) {
//   var id = req.params.id;
// });
//
// router.put('/:id', function(req, res) {
//
// });

module.exports = router;
