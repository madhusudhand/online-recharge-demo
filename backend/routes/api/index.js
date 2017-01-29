var express = require('express');
var router = express.Router();

const userService = require('../../db/user-service');
const rechargeService = require('../../db/recharge-service');

// default route
router.get('/', function(req, res, next) {
  res.send({
    api: 'works!!'
  });
});

// route to get user details
router.get('/user/:id', function(req, res, next) {
  var user = userService.getUser(req.params.id);
  res.send({
    user: user
  });
});

// route to login
router.post('/auth/user', function(req, res, next) {
  var user = userService.getUserLogin(req.body);
  res.send(user || 401);
});

// route to do recharge
// this is same for both mobile and dth
// thy differ with "kind" property
router.post('/recharge', function(req, res, next) {
  var data = req.body.data;
  rechargeService.newRecharge({
    kind: data.type,
    user: data.userId,
    number: data.number,
    amount: data.amount,
    amountPaid: data.amountPayable,
    date: new Date(),
    status: 'success'
  });
  res.send({status: 'success'});
});

// this is to get user recharge history
router.get('/history/:userId', function(req, res, next) {
  var history = rechargeService.getRechargeHistory(req.params.userId);
  res.send(history || {});
});


module.exports = router;
