var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    knex('users')

    //thiscloses insert
    .then(function(ans) {
      res.send(ans);
    })
    .finally(function() {

    });   //this closes finally


});

module.exports = router;
