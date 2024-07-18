const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function loginRequired(req, res, next) {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: ['Access denied'], statusCode: 401 });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: ['Invalid token'], statusCode: 401 });
  }
}

module.exports = { loginRequired };
