const data = require('./data.json');
const _ = require('lodash');

class RechargeService {
  constructor() {
    this.data = data;
  }

  newRecharge(recharge) {
    this.data.recharges.push(recharge);
  }

  getRechargeHistory(id) {
    return _.chain(this.data.recharges)
            .filter(rc => rc.user == id)
            .value();
  }

  getCoupon(code) {
    return _.find(this.data.coupons, coupon => coupon.code == code);
  }
}

module.exports = new RechargeService();
