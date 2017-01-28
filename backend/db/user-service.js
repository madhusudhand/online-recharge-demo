const data = require('./data.json');
const _ = require('lodash');

class UserService {
  constructor() {
    this.data = data;
  }

  addUser(user) {
    this.data.users.push(user);
  }

  getUser(id) {
    return _.find(this.data.users, user => user.id == id);
  }

  getUserLogin({username, password}) {
    var user = _.find(this.data.users, (user) => {
      return (user.email == username || user.mobile == username) && user.password == password;
    });

    return user ? {
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      jwt: user.jwt
    } : null;
  }
}

module.exports = new UserService();
