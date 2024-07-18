const client = require('../db');
const { DATABASE_NAME, USERS_COLLECTION, JWT_SECRET, JWT_EXPIRATION } = require('../config');
const database = client.db(DATABASE_NAME);
const users = database.collection(USERS_COLLECTION);
const jwt = require('jsonwebtoken');

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

  async generateToken(user) {
    const accesstoken = jwt.sign({ email: user.email, password: user.password }, JWT_SECRET, { expiresIn: '5m' });
    const refreshToken = jwt.sign({ email: user.email, password: user.password }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
    return { accesstoken, refreshToken };
  }
}

module.exports = new userService();
