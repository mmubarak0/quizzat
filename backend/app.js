const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'This endpoint had not been impelemented yet', statusCode: 404 });
});

module.exports = app;
