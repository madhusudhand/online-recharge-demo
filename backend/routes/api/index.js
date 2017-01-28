var express = require('express');
var router = express.Router();

const userService = require('../../db/user-service');

router.get('/', function(req, res, next) {
  res.send({
    api: 'works!!'
  });
});


router.get('/user/:id', function(req, res, next) {
  var user = userService.getUser(req.params.id);
  res.send({
    user: user
  });
});

router.post('/auth/user', function(req, res, next) {
  var user = userService.getUserLogin(req.body);
  res.send(user || {});
});




module.exports = router;
