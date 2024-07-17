const client = require('../db');
const { DATABASE_NAME, USERS_COLLECTION } = require('../config');
const database = client.db(DATABASE_NAME);
const users = database.collection(USERS_COLLECTION);

class userService {
  constructor() {}

  async getUserByEmail(email) {
    return users.findOne({ email });
  }

  async getUserById(id) {
    return users.findOne({ _id: id });
  }

  async createUser(user) {
    return users.insertOne(user);
  }
}

module.exports = new userService();
