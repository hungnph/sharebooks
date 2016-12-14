var express = require('express');
var router = express.Router();

var dbConnector = require('../modules/dbConnector');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

dbConnector.openConnection();
module.exports = router;
