const bcrypt = require('bcrypt');
const userService = require('../services/user.service');

class AuthService {
  constructor() {}

  async register(req, res) {
    try {
      const { email, password, firstName, lastName } = req.body;
      const user = await userService.getUserByEmail(email);
      if (user) {
        return res
          .status(422)
          .json({ message: 'User already exists', statusCode: 422 });
      }
      const hash = await bcrypt.hash(password, 10);
      const new_user = await userService.createUser({
        email,
        password: hash,
        firstName,
        lastName,
      });
      res.status(201).json({
        message: 'success',
        statusCode: 201,
        data: await userService.getUserById(new_user.insertedId),
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error', statusCode: 500 });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);
      if (!user) {
        return res
          .status(400)
          .json({ message: 'User not found', statusCode: 400 });
      }
      if (!bcrypt.compare(password, user.password)) {
        return res
          .status(400)
          .json({ message: 'Invalid password', statusCode: 400 });
      }
      res.status(200).json({ message: 'Login successful', statusCode: 200 });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Internal Server Error', statusCode: 500 });
    }
  }
}

const authService = new AuthService();
module.exports = authService;
