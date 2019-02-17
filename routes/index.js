var express = require('express');
var router = express.Router();
const datasource = require('../config/datasource');
const testDB = require('../db/testDB');
const connection = datasource.getConnection();
testDB.setConnection(connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.setHeader("Access-Control-Max-Age", "3600");
  res.setHeader("Access-Control-Allow-Headers", "x-requested-with");
  res.setHeader("Access-Control-Allow-Origin", "*");

  testDB.test_all((result) => {
    res.json(result)
  }, (error) => {
    res.status(200)
    .set('Content-Type', 'text/plain;charset=UTF-8')
    .end('error')
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
