const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World', statusCode: 200 });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found', statusCode: 404 });
});

module.exports = app;
