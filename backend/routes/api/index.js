var express = require('express');
var router = express.Router();

const data = require('../../data.json');

router.get('/', function(req, res, next) {
  res.send({
    api: 'works!!'
  });
});


router.get('/user/:id', function(req, res, next) {
  // console.log(req.params.id);
  res.send({
    user: data.users[0]
  });
});




module.exports = router;
