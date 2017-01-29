const data = require('./data.json');
const _ = require('lodash');

class UserService {
  constructor() {
    this.data = data;
  }

  addUser(user) {
    const exists = _.chain(this.data.users)
                  .find(u => u.email == user.email || u.mobile == user.mobile)
                  .value();

    if (exists) return false;

    const maxIdUser = _.chain(this.data.users)
                       .maxBy('id')
                       .value();

    this.data.users.push({
      id: maxIdUser.id + 1,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      name: user.fullname,
      jwt: "123"
    });

    console.log(this.data.users);

    return true;
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
