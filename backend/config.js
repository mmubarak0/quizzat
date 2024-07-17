const DATABASE_URI =
  process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10';
const DATABASE_NAME = process.env.DATABASE_NAME || 'quizDB';
const USERS_COLLECTION = process.env.USERS_COLLECTION || 'users';
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

module.exports = {
  DATABASE_URI,
  DATABASE_NAME,
  USERS_COLLECTION,
  JWT_SECRET,
  JWT_EXPIRATION,
};
