var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pamuk' });
});

router.get('/rest/api/v1', function(req, res, next) {
  res.status(200).json({
    "message": "hello gang9"
  })
});

module.exports = router;
