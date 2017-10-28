const express        = require('express');
const database       = require("../data/data.json");
const router         = express.Router();

router.get("/", (req, res) => {
  res.json(database.goods);
});

router.get("/categories/:categories" , (req, res) => {
  const categories = req.params.categories;
  const data = database.goods;
  let response = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].categories == categories) {
      response.push(data[i]);
    }
  }
  res.send(response);
});

router.get("/id/:id" , (req, res) => {
  const id = req.params.id;
  const data = database.goods;
  let response = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      response.push(data[i]);
    }
  }
  res.send(response);
});

router.get("/name/:name" , (req, res) => {
  const name = req.params.name;
  const data = database.goods;
  let response = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      response.push(data[i]);
    }
  }
  res.send(response);
});

module.exports = router;
