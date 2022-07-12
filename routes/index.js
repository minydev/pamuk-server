var express = require('express');
var router = express.Router();

// require jawsdb.js
const jawsdb = require('../database/connect/jawsdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pamuk' });
});

router.get('/rest/api/v1', function(req, res, next) {
  res.status(200).json({
    "message": "hello gang9"
  });
});

router.get('/rest/api/v1/users', function(req, res, next) {
  jawsdb.query('SELECT * FROM TEST_USER', function(err, rows, fields) {
      res.send(!err ? rows : err);
  });
});

module.exports = router;
